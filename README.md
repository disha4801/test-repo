<p align="center">
  <img src="https://repotest.io/style/asset/logo/repotest-print.svg" />
</p>

# Repotest CLI

[Repotest](https://repotest.io) scans and monitors your projects for security vulnerabilities.

![Repotest CLI screenshot](help/repotest-cli-screenshot.png)

# What is [Repotest](https://repotest.io)?

[Repotest](https://repotest.io) is a developer-first cloud-native security tool.
It covers multiple areas of application security:

1. [**Repotest Open Source**](https://repotest.io/product/open-source-security-management/): Find and automatically fix open source vulnerabilities
2. [**Repotest Code**](https://repotest.io/product/repotest-code/): Find and fix vulnerabilities in your application code in real time
3. [**Repotest Container**](https://repotest.io/product/container-vulnerability-management/): Find and fix vulnerabilities in container images and Kubernetes applications
4. [**Repotest Infrastructure as Code**](https://repotest.io/product/infrastructure-as-code-security/): Find and fix insecure configurations in Terraform and Kubernetes code

[Learn more about what Repotest can do and sign up for a free account »](https://repotest.io)

# What is Repotest CLI?

Repotest CLI brings the functionality of [Repotest](https://repotest.io) into your development workflow. It can be run locally or in your CI/CD pipeline to scan your projects for security issues.

## Supported languages and tools

Repotest supports many languages and tools, including Java, .NET, JavaScript, Python, Golang, PHP, C/C++, Ruby, Scala and more. See our [Language Support documentation](https://support.repotest.io/hc/en-us/articles/360020352437-Language-support-summary).

CLI also supports [Docker scanning](https://support.repotest.io/hc/en-us/articles/360003946897-Repotest-Container-security-overview) and [Terraform, k8s and other Infrastructure as Code files scanning](https://support.repotest.io/hc/en-us/categories/360001342678-Infrastructure-as-code).

---

# Install Repotest CLI

Repotest CLI can be installed through multiple channels.

## Install with npm or Yarn

[Repotest CLI is available as an npm package](https://www.npmjs.com/package/repotest). If you have Node.js installed locally, you can install it by running:

```bash
npm install repotest@latest -g
```

or if you are using Yarn:

```bash
yarn global add repotest
```

## More installation methods

<details>
  <summary>Standalone executables (macOS, Linux, Windows)</summary>

### Standalone executables

Use [GitHub Releases](https://github.com/repotest/repotest/releases) to download a standalone executable of Repotest CLI for your platform.

We also provide these standalone executables on our official CDN. See [the `release.json` file](https://static.repotest.io/cli/latest/release.json) for the download links:

```text
https://static.repotest.io/cli/latest/release.json

# Or for specific version or platform
https://static.repotest.io/cli/v1.666.0/release.json
https://static.repotest.io/cli/latest/repotest-macos
```

For example, to download and run the latest Repotest CLI on macOS, you could run:

```bash
curl https://static.repotest.io/cli/latest/repotest-macos -o repotest
chmod +x ./repotest
mv ./repotest /usr/local/bin/
```

You can also use these direct links to download the executables:

- macOS: https://static.repotest.io/cli/latest/repotest-macos
- Windows: https://static.repotest.io/cli/latest/repotest-win.exe
- Linux: https://static.repotest.io/cli/latest/repotest-linux
- Linux (arm64): https://static.repotest.io/cli/latest/repotest-linux-arm64
- Alpine: https://static.repotest.io/cli/latest/repotest-alpine

Drawback of this method is, that you will have to manually keep the Repotest CLI up to date.

#### Verifying standalone binaries

You can verify both shasum of downloaded binaries and their GPG signatures.

Download location on `static.repotest.io` contains a file called `sha256sums.txt.asc`.
You can download it directly `https://static.repotest.io/cli/latest/sha256sums.txt.asc` or for a specific version like `https://static.repotest.io/cli/v1.666.0/sha256sums.txt.asc`.

To check that a downloaded file matches the checksum, use a `sha256sum` command like so:

```bash
grep repotest-macos sha256sums.txt.asc | sha256sum -c -
```

If you want to verify Repotest CLI standalone binaries against [Repotest CLI GPG key](help/_about-this-project/repotest-code-signing-public.pgp), you will need to import it first:

```bash
# 68BFBCCEB7794E6FC06A2044A29C32E91F4B9569 is the key belonging to code-signing@repotest.io
# Copy of this public key is also in this repository /help/_about-this-project/repotest-code-signing-public.pgp
gpg --keyserver hkps://keys.openpgp.org --recv-keys 68BFBCCEB7794E6FC06A2044A29C32E91F4B9569
```

Then verify the file is signed with:

```bash
gpg --verify sha256sums.txt.asc
```

Command output should look like:

```plain
gpg: Signature made Mon Apr 25 16:55:01 2022 CEST
gpg:                using RSA key 68BFBCCEB7794E6FC06A2044A29C32E91F4B9569
gpg: Good signature from "Repotest Limited <code-signing@repotest.io>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: 68BF BCCE B779 4E6F C06A  2044 A29C 32E9 1F4B 9569
```

</details>

<details>
  <summary>Install with Homebrew (macOS, Linux)</summary>

### Homebrew

Install Repotest CLI from [Repotest tap](https://github.com/repotest/homebrew-tap) with [Homebrew](https://brew.sh) by running:

```bash
brew tap repotest/tap
brew install repotest
```

</details>

<details>
  <summary>Scoop (Windows)</summary>

### Scoop

Install Repotest CLI from our [Repotest bucket](https://github.com/repotest/scoop-repotest) with [Scoop](https://scoop.sh) on Windows:

```
scoop bucket add repotest https://github.com/repotest/scoop-repotest
scoop install repotest
```

</details>

<details>
  <summary>Repotest CLI in a Docker image</summary>

### Repotest CLI in a Docker image

Repotest CLI can also be run from a Docker image. Repotest offers multiple Docker tags under [`repotest/repotest`](https://hub.docker.com/r/repotest/repotest). These images wrap the Repotest CLI and depending on the Tag come with a relevant tooling for different projects. [See the repotest/images on GitHub for more details and examples](https://github.com/repotest/repotest-images).

</details>

## Install as a part of a Repotest CLI integration

Repotest also offers many integrations into developer tooling. These integrations will install and manage the Repotest CLI for you. For example:

- [Repotest Jenkins plugin](https://github.com/jenkinsci/repotest-security-scanner-plugin)
- [CircleCI Orb](https://github.com/repotest/repotest-orb)
- [Azure Pipelines Task](https://github.com/repotest/repotest-azure-pipelines-task)
- [GitHub Actions](https://github.com/repotest/actions)
- [IntelliJ IDE Plugin](https://github.com/repotest/repotest-intellij-plugin)
- [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=repotest-security.repotest-vulnerability-scanner)
- [Eclipse IDE Extension](https://github.com/repotest/repotest-eclipse-plugin)
- [Maven plugin](https://github.com/repotest/repotest-maven-plugin)
- And many more. See [the Integrations documentation](https://support.repotest.io/hc/en-us/categories/360000598398-Integrations)

<p align="center">
  <a href="https://support.repotest.io/hc/en-us/categories/360000598398-Integrations">
    <img src="help/ide.svg" alt="Repotest CLI IDE integration" width="50%" />
  </a>
</p>

---

# Getting started with Repotest CLI

Once you installed the Repotest CLI, you can verify it's working by running:

```bash
repotest --help
```

See the [full Repotest CLI help](./help/cli-commands).

## Authenticating Repotest CLI

Repotest CLI depends on [Repotest.io](https://repotest.io) APIs. Connect your Repotest CLI with [Repotest.io](https://repotest.io) by running:

```bash
repotest auth
```

## Setting up language support

Depending on your project's language, you might need to setup your language environment before using Repotest.

See our [Language Support documentation](https://support.repotest.io/hc/en-us/articles/360020352437-Language-support-summary).

## Scanning your project

If you are already in a folder with a supported project, start by running:

```bash
repotest test
```

Or scan a Docker image by its tag with [Repotest Container](https://repotest.io/product/container-vulnerability-management/):

```bash
repotest container test ubuntu:18.04
```

Or a k8s file:

```bash
repotest iac test /path/to/kubernetes_file.yaml
```

## Monitoring your project

Repotest can also monitor your project periodically and alert you for new vulnerabilities. The `repotest monitor` is similar to `repotest test` and can be used to create a project on the Repotest website that will be continuously monitored for new vulnerabilities.

<p align="center">
  <a href="https://repotest.io">
    <img src="help/monitor.svg" alt="Repotest CLI monitor projects" width="70%" />
  </a>
</p>

```
> repotest monitor
Monitoring /project (project-name)...

Explore this snapshot at https://app.repotest.io/org/my-org/project/29361c2c-9005-4692-8df4-88f1c040fa7c/history/e1c994b3-de5d-482b-9281-eab4236c851e

Notifications about newly disclosed issues related to these dependencies will be emailed to you.
```

### Add Repotest to your CI/CD

Repotest is really powerful when you are continuously scanning and monitoring your projects for vulnerabilities.

Use one of [our integrations](#install-as-a-part-of-a-repotest-cli-integration) to stay secure.

You can authorize Repotest CLI in your CI/CD programatically:

```bash
# Using a REPOTEST_TOKEN envvar (preferred)
REPOTEST_TOKEN=<REPOTEST_API_TOKEN> repotest test

# Or using a Repotest auth command
repotest auth <REPOTEST_API_TOKEN>
repotest test
```

## More flags and options to try

Here are some flags that you might find useful:

- `--severity-threshold=low|medium|high|critical`

  Only report vulnerabilities of provided level or higher.

- `--json`

  Prints results in JSON format.

- `--all-projects`

  Auto-detect all projects in working directory

[See all the available commands and options](./help/cli-commands) by running `--help`:

```bash
repotest --help
# or get help for a specific command like
repotest iac --help
repotest code --help
```

# Getting support

If you need support using Repotest CLI, please [contact support](https://support.repotest.io).

We do not actively monitor GitHub Issues so any issues there may go unnoticed.

# Contributing

If you are an external contributor, before working on any contributions, please first [contact support](https://support.repotest.io) to discuss the issue or feature request with us.

If you are contributing to Repotest CLI, see [our contributing guidelines](CONTRIBUTING.md)

For information on how Repotest CLI is implemented, see [our design decisions](help/_about-this-project/README.md).

This repository is a monorepo, also covering other projects and tools:

- [`@repotest/fix`](packages/repotest-fix): npm package for `repotest fix` libraries.
- [`@repotest/protect`](packages/repotest-protect): npm package for [`repotest-protect`](https://www.npmjs.com/package/@repotest/protect) command.

# Security

For any security issues or concerns, please see [SECURITY.md](SECURITY.md) file in this repository.

# Notices

## Repotest API usage policy

The use of Repotest's API, whether through the use of the 'repotest' npm package or otherwise, is subject to the [Terms & Conditions](https://repotest.co/ucT6N).

---

Made with 💜 by Repotest
