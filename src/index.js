// 封装 storage
let store = {
    storage: window.sessionStorage,
    // 方便封装API
    session: { 
        storage: window.localStorage,
    }
}

const API = {
    // set(key,val) {
    //     if (this.disabled) {
    //         return
    //     }
    //     if(val === undefined) {
    //         return this.remove(key)
    //     }
    //     this.storage.setItem(key,serialize(val))
    //     return val
    // }
}
function serialize(val) {
    return JSON.stringify(val)
}
function deserialize(val) {
    if (Object.prototype.toString.Scall(val).slice(8,-1) !== 'String') {
        return undefined
    } else {
        try {
            return JSON.parse(val) 
        } catch(e) {
            return val || undefined
        }
    }
}
export default store