### 
npx create-mf-app  -> setup<br/>
create comppnents
### webpack config
moduleFederationPlugin -> <br/>

remotes-> farklı projelerden içeriye alacağım componentler <br/> 
exposes-> içeriden dışarıya göndereceğim componentler <br/>
shared-> dependensies leri dışarıda kullanılır kılıyor<br/>

### remoteEntry.js veri yayınlayabilmesi için içerisine vir servor kuracağız
uygulama dizninde -> npm run build <br/> 
dist dosyasına uygulamanın buildi çıkacak <br/>
sonrasında içerisine servor kuracağız<br/>
npx servor -> kpatıp cd.. diyerek geri gidiyoruz ana dizinde tekrar npm run start diyoruz

<br/>
projede yaptığımız değişiklik sonrasında tekrar başlatmak önemli

