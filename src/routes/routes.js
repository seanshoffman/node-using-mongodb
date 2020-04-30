import { addnewProduct, getProducts } from '../controllers/controllers';

const routes = (app) => {
    app.route('/products')
        .post(addnewProduct)
        .get(getProducts);
}

export default routes;