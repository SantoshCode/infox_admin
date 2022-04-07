// material
import { Box, Grid, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
// components
import Page from '../components/Page';
import { TotalChatbotsCount } from '../components/_dashboard/app';
import publicFetch from '../utils/fetch';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const [state, setState] = useState(null);
  useEffect(() => {
    publicFetch
      .get(`app/get_all`)
      .then((res) => {
        console.log(res);
        setState({ chatbots: JSON.parse(res.data)?.length });
      })
      .catch(() => {});
  }, []);

  //   useEffect(() => {
  //     setState({
  //       chatbots: 9
  //     });
  //  fetchContext.authAxios
  //    .get('stats')
  //    .then((res) => {
  //      console.log('stats');
  //      console.log(res);
  //      const { videos, news, blogs, gallery } = res.data;
  //      setState({
  //        videos,
  //        news,
  //        blogs,
  //        gallery
  //      });
  //    })
  //    .catch(() => {
  //      appContext.handleAlert();
  //    });
  //   }, []);
  return (
    <Page title="Dashboard | Admin Panel">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          {!state ? (
            <Loader />
          ) : (
            <>
              <Grid item xs={12} sm={6} md={3}>
                <TotalChatbotsCount count={state.chatbots} />
              </Grid>
              {/* <Grid item xs={12} sm={6} md={3}>
                <TotalBlogCount count={state.blogs} />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TotalYoutubeVideos count={state.videos} />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TotalGalleryCount count={state.gallery} />
              </Grid> */}
            </>
          )}
        </Grid>
      </Container>
    </Page>
  );
}
