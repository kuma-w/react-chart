import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { ChartWrapper } from '../../components/Wrapper';

const MyCard = () => (
  <ChartWrapper sx={{ mt: '2em' }}>
    <Grid sx={{ width: '13em', mx: '1em' }}>
      <Card sx={{ height: '100%' }}>
        <CardContent>
          <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
            <Grid item>
              <Typography color='textSecondary' gutterBottom variant='overline'>
                자율모드 주행거리
              </Typography>
              <Typography color='textPrimary' variant='h4'>
                7564.96
              </Typography>
            </Grid>
          </Grid>
          <Box
            sx={{
              pt: 2,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ArrowUpwardIcon color='success' />
            <Typography
              color='green'
              sx={{
                mr: 1,
              }}
              variant='body2'
            >
              56.5%
            </Typography>
            <Typography color='textSecondary' variant='caption'>
              Since last month
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
    <Grid sx={{ width: '13em', mx: '1em' }}>
      <Card sx={{ height: '100%' }}>
        <CardContent>
          <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
            <Grid item>
              <Typography color='textSecondary' gutterBottom variant='overline'>
                운전자개입 별 주행거리
              </Typography>
              <Typography color='textPrimary' variant='h4'>
                134.47
              </Typography>
            </Grid>
          </Grid>
          <Box
            sx={{
              pt: 2,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ArrowUpwardIcon color='success' />
            <Typography
              color='green'
              sx={{
                mr: 1,
              }}
              variant='body2'
            >
              8.5%
            </Typography>
            <Typography color='textSecondary' variant='caption'>
              Since last month
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
    <Grid sx={{ width: '13em', mx: '1em' }}>
      <Card sx={{ height: '100%' }}>
        <CardContent>
          <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
            <Grid item>
              <Typography color='textSecondary' gutterBottom variant='overline'>
                주행 횟수
              </Typography>
              <Typography color='textPrimary' variant='h4'>
                724
              </Typography>
            </Grid>
          </Grid>
          <Box
            sx={{
              pt: 2,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ArrowUpwardIcon color='success' />
            <Typography
              color='green'
              sx={{
                mr: 1,
              }}
              variant='body2'
            >
              32.8%
            </Typography>
            <Typography color='textSecondary' variant='caption'>
              Since last month
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  </ChartWrapper>
);

export default MyCard;
