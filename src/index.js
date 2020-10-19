module.exports = function reverse (n) {
    n_str = n.toString();
    n_str = n_str.replace('-', '');
    n_str_new = '';
    
    for (let i = n_str.length-1; i >= 0 ; i--) {
        n_str_new += n_str[i];
    }
    return parseInt(n_str_new);
}
