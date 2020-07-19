import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { http } from '../modules';
import { actionsType } from '../store/ruducers/areaReducer';
import _ from 'lodash';

function TaskAreaView( payload ) {


   
    const { areas, isLoading, errorMessage } = payload;

    let view = null;
    let hasDataShow = false;

    if( isLoading ) {
        view = 'Loading...';
    } else if ( ! _.isEmpty( errorMessage ) ) {
        view = errorMessage;
    } else {
        hasDataShow = true;
        view = areas.map( (i) => {
            return (
                <li className='taskArea__listing__item' key={ i.areaId }>
                    
                    {/* <Link to='/listing'> */}
                        <img
                             src={`data:image/png;base64,${i.image}`}
                            alt='img'
                        />
                        <div className='taskArea__listing__label'>{ i.areaName } &nbsp;&nbsp;</div>
                    {/* </Link> */}
                    <br/>
                    <div ><img onClick={() => deleteArea(i.areaId)} src='/images/trash.svg' alt='approved' width="11px"/></div>
                    {/* {console.log(areas)} */}
                    
                </li>
            );
        });
    }

    return (
        <div className='taskArea'>
            <div className='card card--mb20'>
                <div className='card__content'>
                <h4 className='heading heading--h4'>Tasks Area</h4>
                    <ul className={ `taskArea__listing ${ hasDataShow ? '' : 'taskArea__listing--textcenter' }` }>
                        { view  }
                    </ul>
                </div>
            </div>
        </div>
    );
}


const deleteArea = ( areaId ) => {
    http.area.delete( areaId ).then( ( response ) => {
        alert( response.message );
        window.location.reload()
    } );

};





export default connect(
    ({ areaReducer }) => {
        return areaReducer;
    }, ( dispatch ) => {

        http.area.getAll().then((response) => {

            dispatch( {
                type: actionsType.LOAD_DATA,
                data: response.payload.objectList
            } );

        }).catch( ( e ) => {
            dispatch( {
                type: actionsType.NETWORK_ERROR,
                data: e.message
            } );
        } );

        return {};

    })(TaskAreaView);