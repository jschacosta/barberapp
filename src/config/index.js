const apis = new Map()
apis.set('local', 'http://localhost:3000')
apis.set('development', 'https://apidv4.unabase.com')
// apis.set('test', 'https://apitv4.unabase.com')
// apis.set('production', 'https://apiv4.unabase.com')
let env = ''
console.log('el env1')
if (localStorage.getItem('apiUrl')) {
    console.log('el env2')
    env = localStorage.getItem('apiUrl')
} else {
    console.log('el env3')
    env = process.env.NODE_ENV
}
console.log('el env4', env, process.env)
console.warn('env -> ', env)
console.log(apis)
const api = apis.get(env.trim())
console.log(api)

export default api