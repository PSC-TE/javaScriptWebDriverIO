describe('suite', () => {
    it('handleScrollBar',async () => {
        await browser.url("https://www.flipkart.com/");
        await $("//button[text()='✕']").click();
        let element= await $("//a[text()='Contact Us']");
        await $("//a[text()='Contact Us']").scrollIntoView();
        await browser.pause(5000);
        
    });
});