import React, {Component} from 'react';
import ListItem from './list-item';
import styled from "styled-components";
import Spinner from '../spinner/spinner';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withPoststoreService} from '../fuck-hoc/withPoststoreService';
import {postsLoaded} from '../../action/action';

class List extends Component {


    componentDidMount() {
        const {fireBaseApi, postsLoaded} = this.props;

        fireBaseApi.getPosts()
            .then((items) => postsLoaded(items))

    }


    render() {
        const {items, loading} = this.props;
        const list = !loading ? <PostsView items={items}/> : null;
        const spinner = loading ? <Spinner/> : null;
        return (
            <Container>
                <Ulist>
                    {spinner}
                    {list}
                </Ulist>
            </Container>
        )
    }

}


const PostsView = ({items}) => {
    return items.map(item => {
        return (

            <FlexLi key={item.id}>
                <ListItem className='li__title'>
                    {item.title}
                </ListItem>
                <ListItem className='li__text'>
                    {item.fulltext}
                </ListItem>
                <ListItem className='li__date'>
                    {item.date}
                </ListItem>
                <ListItem className='li__note'>
                    {item.type}
                </ListItem>
            </FlexLi>

        )
    })

}
const mapStateToProps = ({items, loading}) => {
    return {items, loading};
};

const mapDispatchToProps = {
    postsLoaded
};
export default compose(
    withPoststoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(List);

const Ulist = styled.ul`
	margin-bottom: 15px;
	
	display: flex;
	border-radius: 4px;
	border: none;
	color: #fff;
	padding: 20px;
	min-height: 320px;
	box-sizing: border-box;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 14px;
	background-color: #09a222;
    flex-wrap: wrap;
	&:focus {
		outline: none;
	}
`;

const Container = styled.div`
    width: 900px;
    margin: 0 auto;
`;
const FlexLi = styled.li`
	display: block;
	width: calc(33.33% - 20px);
	margin: 0 10px 10px;
	flex-wrap: wrap;
	padding: 15px;
	box-sizing: border-box;
    background-color: #e48079;
	&:focus {
		outline: none;
	}
`;
