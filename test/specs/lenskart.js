
describe('suite', () => {
    it('test',async () => {
        await browser.url("https://www.lenskart.com/");
        
        await $("//button[@id='wzrk-cancel']").click();
        await $("//input[@name='q']").click();
        await browser.pause(2000)
        let trendingSearch=await $$("//div[@class='trending_block']//li/a")
       
        // for (let i=0;i<trendingSearch.length;i++) {
        //     let name= await trendingSearch[i].getText();
            
        //     console.log(name);
        // }
        for (const list of trendingSearch) {
            let name =await list.getText()
            console.log(name);
        }
        
    });
});