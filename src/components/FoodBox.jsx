import React from 'react'
import { Card, Col, Button } from 'antd';

function FoodBox(props) {
    const {food, deleteFood} = props
    const calories = food.calories * food.servings
  return (
    <div>
        <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {calories} </b> kcal
        </p>
        <Button onClick={() => deleteFood(food.name)}> Delete </Button>
      </Card>
    </Col>
    </div>
  )
}

export default FoodBox