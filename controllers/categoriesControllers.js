import db from "../db.js";

async function getCategories(req, res) {
    try {
        const categories = await db.collection("genero").find({}).toArray();
        res.send(categories);
    } catch (e) {
        console.log(e);
        return res.status(500).send("Erro ao tentar acessar as categorias.", e);
    }
}

async function getAlbum(req, res) {
    try{
        const album = await db.collection("genero").find({}).toArray();
        res.send(album);
    } catch(e) {
        console.log(e);
        return res.status(500).send("Erro ao tentar acessar as categorias.", e);
    }
}

async function getUserCart(req, res){

    try{
        const userCart =  await db.collection("carts").find({}).toArray();
        res.send(userCart)
    }catch(e) {
        console.log(e);
        return res.status(500).send("Erro ao tentar acessar as categorias.", e);
    }
}

async function insertToCart(req, res) {

    const { user } = res.locals;
    const { banda, preco, album, url } = req.body

    try{

        await db.collection("carts").isertOne(
            {
                idUsuário: user._id,
                banda: banda,
                preco: preco,
                album: album,
                url: url
            }
        )
    
        return res.send({ id: user._id }).send(201);
    
    }catch(e){
        console.log(e);
        return res.sendStatus(501);
    }
    
}

export { getCategories, getAlbum, insertToCart, getUserCart };