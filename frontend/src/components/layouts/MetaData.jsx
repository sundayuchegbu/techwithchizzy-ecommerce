import { Helmet } from 'react-helmet';
const MetaData = ({ title }) => {
  return (
    <Helmet>
      <title>{`${title} - TechWithChizzy`}</title>
    </Helmet>
  );
};

export default MetaData;
