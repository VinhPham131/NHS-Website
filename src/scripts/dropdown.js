function toggleDropdownShop() {
    let dropdownShop = document.querySelector('#dropdownButton #dropdownShop');
    dropdownShop.classList.toggle('hidden');
}

document.getElementById('memory').addEventListener('click', toggleDropdownShop);
