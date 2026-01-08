document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('checkbox');
    const root = document.documentElement;
    if(!checkbox) return;

    // restore saved theme
    const saved = localStorage.getItem('theme');
    if(saved === 'light') checkbox.checked = true;
    if(saved === 'dark') checkbox.checked = false;

    function apply(){
        if(checkbox.checked){
            root.classList.add('light-theme');
            localStorage.setItem('theme','light');
        } else {
            root.classList.remove('light-theme');
            localStorage.setItem('theme','dark');
        }
    }

    // apply initial
    apply();

    checkbox.addEventListener('change', apply);
});