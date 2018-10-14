let total = 5000,
    hourRate = 0,
    time = 1,
    i = 0,
    tabLeft = document.querySelector('.tab-left'),
    tabRight = document.querySelector('.tab-right'),
    blocksBlock = document.getElementById('blocks-block'),
    pagesBlock = document.getElementById('pages-block'),
    counterBlock = document.getElementById('counter-block'),
    counterPages = document.getElementById('counter-pages'),
    counterHours = document.getElementById('counter-hours'),
    counterRate = document.getElementById('counter-rate'),
    changesCheck = document.getElementById('changes-check'),
    cmsCheck = document.getElementById('cms-check'),
    totalValue = document.getElementsByClassName('total-count')[0],
    input = document.getElementsByTagName('input');

const   land = 5000,
        corp = 12000,
        cms = 4000,
        changes = 1000,
        blocks = 500,
        pages = 2500;

window.addEventListener('DOMContentLoaded', function() {

    tabLeft.addEventListener('click', () => {
        for ( i = 0; i < input.length; i++ ) {
            input[i].value = '';
        }

        blocksBlock.style.display = 'flex';
        pagesBlock.style.display = 'none';

        tabLeft.classList.add('active');
        tabRight.classList.remove('active');

        if (changesCheck.checked) {
            changesCheck.checked = false;
        }
        if (cmsCheck.checked) {
            cmsCheck.checked = false;
        }
        
        total = land;
        totalValue.value = total;
    });

    tabRight.addEventListener('click', () => {
        for ( i = 0; i < input.length; i++ ) {
            input[i].value = '';
        }

        blocksBlock.style.display = 'none';
        pagesBlock.style.display = 'flex';

        tabLeft.classList.remove('active');
        tabRight.classList.add('active');

        if (changesCheck.checked) {
            changesCheck.checked = false;
        }
        if (cmsCheck.checked) {
            cmsCheck.checked = false;
        }
        
        total = corp;
        totalValue.value = total;
    });
 
    counterBlock.addEventListener('input', () => {
        clearHoursAndRate();
        total = counterBlock.value * blocks;
        ifChecked();
        totalValue.value = total;
    });

    counterPages.addEventListener('input', () => {
        clearHoursAndRate();
        total = counterPages.value * pages;
        ifChecked();
        totalValue.value = total;
    });

    counterHours.addEventListener('input', () => {
        clearBlockAndPages();
        time = counterHours.value;
        total = counterHours.value * hourRate;
        ifChecked();
        totalValue.value = total;
    });

    counterRate.addEventListener('input', () => {
        clearBlockAndPages();
        hourRate = counterRate.value;
        total = time * counterRate.value;
        ifChecked();
        totalValue.value = total;
    });

    changesCheck.addEventListener('change', () => { checkboxCalc(changesCheck); });
    cmsCheck.addEventListener('change', () => { checkboxCalc(cmsCheck); });

    function checkboxCalc(checkbox) {
        if (checkbox.checked) {
            if (checkbox.id == 'changes-check') total += changes;
            if (checkbox.id == 'cms-check') total += cms;
            totalValue.value = total;
        } else {
            if (checkbox.id == 'changes-check') total -= changes;
            if (checkbox.id == 'cms-check') total -= cms;
            totalValue.value = total;
        }
    }

    function ifChecked() {
        if (changesCheck.checked) total += changes;
        if (cmsCheck.checked) total += cms;
    }

    function clearHoursAndRate() {
        counterHours.value = '';
        counterRate.value = '';
    }
    function clearBlockAndPages() {
        counterBlock.value = '';
        counterPages.value = '';
    }

});