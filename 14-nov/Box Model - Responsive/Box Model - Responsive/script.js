document.addEventListener('DOMContentLoaded', function() {
    const MarginSlider = document.getElementById('margin');
    const rightMarginSlider = document.getElementById('right-margin');
    const leftMarginSlider = document.getElementById('left-margin');
    const borderSlider = document.getElementById('border');
    const paddingSlider = document.getElementById('padding');
    const boxExample = document.querySelector('.box-model-example');
    const marginValue = document.getElementById('margin-value');
    const rightMarginValue = document.getElementById('right-margin-value');
    const leftMarginValue = document.getElementById('left-margin-value');
    const borderValue = document.getElementById('border-value');
    const paddingValue = document.getElementById('padding-value');
    
    rightMarginSlider.addEventListener('input', function() {
        const value = this.value + 'px';
        boxExample.style.marginRight = value;
        rightMarginValue.textContent = value;
    });
    
    leftMarginSlider.addEventListener('input', function() {
        const value = this.value + 'px';
        boxExample.style.marginLeft = value;
        leftMarginValue .textContent = value;
    });
    
    paddingSlider.addEventListener('input', function() {
        const value = this.value + 'px';
        boxExample.style.padding = value;
        paddingValue.textContent = value;
    });
});