export function notFound():never{throw new Error('找不到这个量表目录');}
export function redirect(url:string):never{throw Object.assign(new Error('redirect'),{destination:url});}
