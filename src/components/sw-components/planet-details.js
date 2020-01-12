import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import ErrorBoundry from "../error-boundry";

import withSwapiService from "../hoc-helpers/with-swapi-service";

const PlanetDetails = props => {
  return (
    <ErrorBoundry>
      <ItemDetails {...props}>
        <Record field="population" label="Population" />
        <Record field="rotationPeriod" label="Rotation Period" />
        <Record field="diameter" label="Diameter" />
      </ItemDetails>
    </ErrorBoundry>
  );
};

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  };
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
