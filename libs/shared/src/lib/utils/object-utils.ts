export function setPropertyPathValue(obj: any, path: string, value: any): any {
    const parts = path.split('.')
    if(parts.length > 1) {
        if(!obj[parts[0]]) obj[parts[0]] = {}
        obj[parts[0]] = setPropertyPathValue(obj[parts[0]],parts.slice(1).join('.'), value)
        return obj
    }
    obj[parts[0]] = value
    return obj
}