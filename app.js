export const a = 1;

export const b = 2;

export const c = 3;

function add(...params) {
    let result = 0;
    for (let i = 0; i < params.length; i++) {
        const element = params[i];
        result += element;
    }
    return result;
}

export default add;