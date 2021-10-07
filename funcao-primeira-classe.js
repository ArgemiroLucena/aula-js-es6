function getName() {
    return 'Argemiro Lucena Araújo';
}

function logFn(fn) {
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);