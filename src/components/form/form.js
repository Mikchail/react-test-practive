import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withPoststoreService} from '../fuck-hoc/withPoststoreService';
import Modal from '../modal/modal';
import {openMenu,closeMenu} from '../../action/action';
import '../style.scss'

 class Form extends Component {
    state = {
        title: '',
        fulltext: '',

    };
    openModal = () => {
        console.log(this.props.openMenu)
        this.props.openMenu();
    }
    handlerSubmit = (event) => {
        event.preventDefault();
        const {fireBaseApi} = this.props;
        const data = {
            title: this.state.title,
            fulltext: this.state.fulltext,
            date: new Date().toLocaleString(),
            note: 'string'
        }
        fireBaseApi.setPosts(JSON.stringify(data))
            .catch(err => console.log(err));

        this.setState({
            title: '',
            fulltext: '',

        });
        this.props.closeMenu();
    };

    handleCancel = () => {
        console.log('Cancel function!');
        this.props.closeMenu();
    }
    handlerChanger = (event) => {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        });
    }

    render() {
        return (
            <>
                <Modal
                    title="Test Dialog window"
                    isOpen={this.props.openMenuFlag}
                    onCancel={this.handleCancel}
                    onSubmit={this.handlerSubmit}
                >


                        <label htmlFor="" className='label__text'>
                            Title:
                            <input onChange={this.handlerChanger} type="text" name="title"
                                       value={this.state.title}/>
                        </label>
                        <label htmlFor="" className='label__text'>
                            Fulltext:
                            <input onChange={this.handlerChanger} type="text" name="fulltext"
                                       value={this.state.fulltext}/>
                        </label>



                </Modal>

                    <button onClick={this.openModal}>Show modal</button>


            </>
        )
    }
}


const mapStateToProps = ({openMenuFlag})=>{
    return {openMenuFlag}
};

const mapDispatchToProps = {
    openMenu,
    closeMenu
}
export default compose(
    withPoststoreService(),
    connect(mapStateToProps,mapDispatchToProps)
)(Form)


