describe('suite', () => {
    it('handleDropdown', async() => {
        await browser.url('https://www.globalsqa.com/demo-site/select-dropdown-menu/');
        await $('//select').selectByAttribute('value','IND');
        await browser.pause(5000);
    });

    it.only('handleDropdownAndGetAllValues', async() => {
        await browser.url('https://www.globalsqa.com/demo-site/select-dropdown-menu/');     
        let countries=await $$('//select//option');
        for (let country of countries) {
            let countrytext=await country.getText();
            console.log("========="+countrytext);
        }
    });
});