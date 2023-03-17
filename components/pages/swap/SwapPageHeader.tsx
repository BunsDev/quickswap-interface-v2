import { Box } from '@mui/material';
import { HelpOutline } from '@mui/icons-material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const SwapPageHeader: React.FC<{ proMode: boolean }> = ({ proMode }) => {
  const helpURL = process.env.REACT_APP_HELP_URL;
  const { t } = useTranslation();

  return proMode ? (
    <></>
  ) : (
    <Box className='pageHeading'>
      <h4>{t('swap')}</h4>
      {helpURL && (
        <Box
          className='helpWrapper'
          onClick={() => window.open(helpURL, '_blank')}
        >
          <small>{t('help')}</small>
          <HelpOutline />
        </Box>
      )}
    </Box>
  );
};

export default SwapPageHeader;