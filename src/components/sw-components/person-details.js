import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import ErrorBoundry from "../error-boundry";
import withSwapiService from "../hoc-helpers/with-swapi-service";

const PersonDetails = props => {
  return (
    <ErrorBoundry>
      <ItemDetails {...props}>
        <Record field="gender" label="Genger" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    </ErrorBoundry>
  );
};

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  };
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);
