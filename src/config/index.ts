type Config = {
  apiBase: string
}

const config: Config = {
  apiBase: import.meta.env.API_BASE,
}

export default config
