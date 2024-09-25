export const parseFeaturesToLocationData = (features) => {
  return features.map((feature) => {
    return {
      objectID: feature.attributes.OBJECTID,
      txAtrativo: feature.attributes.tx_atrativo,
      txEndereco: feature.attributes.tx_endereco,
      txTipo: feature.attributes.tx_tipo,
      txTombamento: feature.attributes.tx_tombamento,
      txBairro: feature.attributes.tx_bairro,
      latitude: feature.geometry.x,
      longitude: feature.geometry.y,
    };
  });
};
