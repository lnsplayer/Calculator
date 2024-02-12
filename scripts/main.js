function insert(exp) {
    document.form.textview.value =
    document.form.textview.value + exp;
}

function clean() {
    document.form.textview.value = '';
}

function del() {
    let exp = document.form.textview.value;
    document.form.textview.value = 
    exp.substring(0, exp.length -1);
}

function equal() {
    let exp = document.form.textview.value;
    if(exp) {
        document.form.textview.value = eval(exp);
    }
}