import React from 'react'
import './dashboard.scss'

import { NotificationsNone, ThumbUpOffAltOutlined } from '@mui/icons-material'
import Button from '@mui/material/Button'
import { Avatar, Box, Card, CardContent, Grid } from '@mui/material'
import { useGetAllItemsQuery } from '../../actions/apiFetch'

const Dashboard = () => {
    const { data } = useGetAllItemsQuery()
    console.log(data)
  return (
    <div className='dashboard'>
        <div className="top-bar">
            <div className="welcome-text">
                <div className="title">Welcome</div>
                <div className="text">Your current sales auction and activity.</div>
            </div>
            <div className="not-bell">
                <NotificationsNone style={{fontSize: '2rem', fontWeight: 400}}/>
                <div className="not-count">2</div>
            </div>
        </div>
        <div className="auction-card">
            <div className="gradient-bar">
            </div>
            <div className="header">
                <div className="lft-hdr">
                    <div className="avatar">
                        <img src="https://rayda.s3.eu-west-3.amazonaws.com/avatar.png" alt="" />
                    </div>
                    <div className="headr-info">
                        <div className="headr-tmr">
                            Starts in: 3 days : 2 hours : 24 minutes
                        </div>
                        <div className="headr-txt">
                            <div className="headr-point"></div>
                            <div className="headr-sts"><span></span> Not Live</div>
                            <div className="extra">Layers Auction</div>
                        </div>
                    </div>
                </div>
                <div className="rght-hdr">
                    <Button variant="outlined" className="headr-btn" startIcon={<ThumbUpOffAltOutlined />}>
                        Accept Invite
                    </Button>
                </div>
            </div>
        </div>

        <div className="items-card">
            <div className="ftrd-items">
                <div className="items-headr">
                    <div className="headr-ttl">Featured Items</div>
                    <div className="headr-rght">
                        <Button variant="outlined" className="headr-btn">
                            View Auction
                        </Button>
                    </div>
                </div>
                <div className="items-grid">
                    <Grid container rowSpacing={3} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                        {data ? (
                        data.data.map((item) => (
                        <Grid item xs={3}>
                        <Box className="item-box" sx={{minWidth: 275}}>
                            <Card variant='outlined' className='item-card'>
                                <CardContent>
                                    <div className="card-image">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="card-profile">
                                        <Avatar sx={{ width: 35, height: 35, marginRight: 2, backgroundColor: '#f2f4f7', fontSize: '0.9rem', fontWeight: '550', color: '#888787' }}>KO</Avatar>
                                        <div className="user-name">{item.name}&nbsp;</div>
                                        <div className="user-status">(Highest Bidder)</div>
                                    </div>
                                    <div className="item-name">{item.title}</div>
                                    <div className="item-bid">Current Bid: <span>{item.bid}</span></div>
                                    <div className="item-btn">
                                        <Button variant='contained' className='btn-itm'>Add to Wishlist</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                        ))) : (                        <Grid item xs={3}>
                            <Box className="item-box" sx={{minWidth: 275}}>
                                <Card variant='outlined' className='item-card'>
                                    <CardContent>
                                        <div className="card-image">
                                            <img src='null' alt="" />
                                        </div>
                                        <div className="card-profile">
                                            <Avatar sx={{ width: 35, height: 35, marginRight: 2, backgroundColor: '#f2f4f7', fontSize: '0.9rem', fontWeight: '550', color: '#888787' }}>KO</Avatar>
                                            <div className="user-name">hjfh&nbsp;</div>
                                            <div className="user-status">(Highest Bidder)</div>
                                        </div>
                                        <div className="item-name">hcfjkg</div>
                                        <div className="item-bid">Current Bid: <span>dhfjh</span></div>
                                        <div className="item-btn">
                                            <Button variant='contained' className='btn-itm'>Add to Wishlist</Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>)}

                        
                    </Grid>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard