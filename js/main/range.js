
    $(document).ready(function () {
        const
        range = document.getElementById('range'),
        rangeV = document.getElementById('rangeV'),
        setValue = ()=>{
            const
            newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
            newPosition = 10 - (newValue * 0.2);
            rangeV.innerHTML = `<span>${range.value}</span>`;
            rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
        };
        document.addEventListener("DOMContentLoaded", setValue);
        range.addEventListener('input', setValue);

        const
        range2 = document.getElementById('range_02'),
        rangeV2 = document.getElementById('rangeV_02'),
        setValue2 = ()=>{
            const
            newValue = Number( (range2.value - range2.min) * 100 / (range2.max - range2.min) ),
            newPosition = 10 - (newValue * 0.2);
            rangeV2.innerHTML = `<span>${range2.value}</span>`;
            rangeV2.style.left = `calc(${newValue}% + (${newPosition}px))`;
        };
        document.addEventListener("DOMContentLoaded", setValue2);
        range2.addEventListener('input', setValue2);

        const
        range3 = document.getElementById('range_03'),
        rangeV3 = document.getElementById('rangeV_03'),
        setValue3 = ()=>{
            const
            newValue = Number( (range3.value - range3.min) * 100 / (range3.max - range3.min) ),
            newPosition = 10 - (newValue * 0.2);
            rangeV3.innerHTML = `<span>${range3.value}</span>`;
            rangeV3.style.left = `calc(${newValue}% + (${newPosition}px))`;
        };
        document.addEventListener("DOMContentLoaded", setValue3);
        range3.addEventListener('input', setValue3);

    });

    