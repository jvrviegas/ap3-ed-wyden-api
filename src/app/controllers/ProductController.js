import Product from '../models/Product';

class ProductController {
  async index(req, res) {
    const products = await Product.findAll();

    return res.status(200).json(products);
  }

  async show(req, res) {
    return res.status(400).json({ error: 'Por favor informe o usuário' });
  }

  async store(req, res) {
    const { name, validate, lote } = req.body;

    if (!name && !validate && !lote) {
      return res.status(400).json({ error: 'Dados inválidos' });
    }

    const product = await Product.create({
      name,
      validate,
      lote,
    });

    if (!product) {
      return res.status(400).json(false);
    }

    return res.status(200).json(product);
  }

  async update(req, res) {
    return res.status(200).json(true);
  }
}

export default new ProductController();
