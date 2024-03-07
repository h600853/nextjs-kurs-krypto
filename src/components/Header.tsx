import React from "react";
import { AppBar, Container, Stack, Toolbar, Typography } from "@mui/material";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="lg">
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="h6" style={{ flexGrow: 1 }} align="center">
              Krypto Dashboard <RocketLaunchIcon />
            </Typography>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
