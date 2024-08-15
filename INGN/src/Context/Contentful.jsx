import { createContext, useContext } from 'react';
import { createClient } from 'contentful';
import PropTypes from 'prop-types';

const ContentfulContext = createContext();

const client = createClient({
    space: '4f8zpp00aoy0', // Replace with your actual space ID
    accessToken: 'H_ypFVbkK5FM_fl0EYhG5H-6bhZfJyEFvZpM4lYswIs' // Replace with your actual access token
});

export const ContentfulProvider = ({ children }) => {
    return (
        <ContentfulContext.Provider value={client}>
            {children}
        </ContentfulContext.Provider>
    );
};

ContentfulProvider.propTypes = { children: PropTypes.node.isRequired };

export const useContentful = () => {
    return useContext(ContentfulContext);
};