import { connect } from "@dagger.io/dagger"

connect(
  async (client) => {
    const password = client.setSecret("password", process.env.CI_REGISTRY_PASSWORD)

    const project = client.host().directory(".")
    
    const deps = client
      .container()
      .from("node:20-alpine")
      .withWorkdir("/app")
      .withFile("./package.json", project.file("package.json"))
      .withFile("./package-lock.json", project.file("package-lock.json"))
      .withExec(["npm", "ci"])
    
    const builder = client
      .container()
      .from("node:20-alpine")
      .withWorkdir("/app")
      .withDirectory(".", project)
      .withDirectory("./node_modules", deps.directory("/app/node_modules"))
      .withExec(["npm", "run", "build"])

    const runtime = await client
      .container()
      .from("node:20-alpine")
      .withEnvVariable("NODE_ENV", "production")
      .withWorkdir("/app")
      .withExec(["addgroup", "--system", "--gid", "1001", "nodejs"])
      .withExec(["adduser", "--system", "--uid", "1001", "nextjs"])
      .withDirectory("./public", builder.directory("/app/public"))
      .withDirectory("./", builder.directory("/app/.next/standalone"), {
        owner: "nextjs:nodejs",
      })
      .withDirectory("./.next/static", builder.directory("/app/.next/static"), {
        owner: "nextjs:nodejs",
      })
      .withExposedPort(3000)
      .withDefaultTerminalCmd(["node"])
      .withDefaultArgs(["server.js"])

      
      await Promise.all(["latest", process.env.CI_COMMIT_SHORT_SHA].map(async tag => {
        await runtime
          .withRegistryAuth(process.env.CI_REGISTRY, process.env.CI_REGISTRY_USER, password)
          .publish(`${process.env.CI_REGISTRY_IMAGE}:${tag}`)
        console.log(`[!] Image ${process.env.CI_REGISTRY_IMAGE}:${tag} pushed`)
      }))
  },
  { LogOutput: process.stderr },
)

