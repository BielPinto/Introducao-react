import React from "react";
import PropTypes from 'prop-types'

const List = (props) => {
    const { listCustomer } = props;
    console.log(listCustomer)

    const renderCustomers = (customer, index) => {
        return (
            <div key={`customer-${customer.id}`}>
                <li>{customer.name}</li>
                {customer.skills.map(renderSkills)}
            </div>
        )
    }

    const renderSkills = (skill, index) => {
        return (
            <div style={{ paddingLeft: '30px' }} key={`skill-${index}`}>
                <li>{skill}</li>
            </div>
        )
    }


    return (
        <div>
            <ul>
                {listCustomer.map(renderCustomers)}
            </ul>
        </div>)

}

List.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    skill: PropTypes.array
}


export default List;

// id: 1,
// name: 'Bruno Carneiro',
// skills: ['React', 'Node', 'CSS', 'Webpack']