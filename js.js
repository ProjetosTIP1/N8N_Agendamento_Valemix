

const projetos = items.flatMap(item => {
  return item.json.data.page_items
    .filter(p => {
      const temARG = p.name.toUpperCase().includes("ARG");
      const temCR = p.project_product.some(prod => prod.product.name.toUpperCase().startsWith("CR"));
      return temARG || temCR;
    })
    .map(p => {
      return {
        projectName: p.name,
        projectCode: p.code,
        customerName: p.customer.name,
        customerCode: p.customer.code,
        customerDocument: p.customer.document,
        addressCode: p.address.code,
        addressStreet: p.address.address_street,
        addressNumber: p.address.address_number,
        addressDistrict: p.address.address_district,
        addressComplement: p.address.address_complement,
        addressPostal: p.address.postal_code,
        addressFull: p.address.address_full,
        addressState: p.address.state,
        addressCity: p.address.city_name,
        fav_plant: p.fav_plant,
        products: p.project_product
          .filter(t => t.product.name.toUpperCase().startsWith("CR"))
          .map(t => {
            return {
              productCode: t.product.code,
              productName: t.product.name,
              productPrice: t.price
            };
          })
      };
    });
});

return [
  {
    json: {
      projetos: projetos
    }
  }
];
