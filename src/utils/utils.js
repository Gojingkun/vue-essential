export function objectToQuery() {
    let obj = arguments[0];
    let prefix = arguments[1];
    if (typeof obj !== "object") return "";
    const attrs = Object.keys(obj);
    return attrs.reduce((query, attr, index) => {
        // 判断是否是第一层第一个循环
        if (index === 0 && !prefix) query += "?";
        if (typeof obj[attr] === "object") {
            const subPrefix = prefix ? `${prefix}[${attr}]` : attr;
            query += this.objectToQuery(obj[attr], subPrefix);
        } else {
            if (prefix) {
                query += `${prefix}[${attr}]=${obj[attr]}`;
            } else {
                query += `${attr}=${obj[attr]}`;
            }
        }
        // 判断是否是第一层最后一个循环
        if (index !== attrs.length - 1) query += "&";
        return query;
    }, "")
}