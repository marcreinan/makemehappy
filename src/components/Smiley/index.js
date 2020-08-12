import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Progress } from 'reactstrap';

/**
 * Componente que exibe o emoji correspondente ao humor informado, 
 * e define o link para a proxima rota 
 * 
 * @param {int} - props.humor = Valor do humor, pode ir de -100 a 100
 * @param {string} - props.link = Endereço do link para o clique no componente
 */
export const Smiley = (props) => {
  return (
    <div className="smiley-container">
      <Card inverse 
        color={ props.humor !== 0 
                ? props.humor > 0 
                  ? 'success' 
                  : 'danger' 
                : 'primary'}>
        <CardHeader>
          <h2 className="humorLabel">
            Humor:&nbsp; 
              { props.humor !== 0 
                  ? props.humor < 0 
                  ? props.humor.toString().substr(1) + '%'
                  : props.humor + '%'
                  :''
                }
              { props.humor !== 0 
                  ? props.humor < 0
                  ?' triste' 
                  :' feliz' 
                  :' normal'
                }
          </h2>
          <Progress
            color={ props.humor !== 0 
                    ? props.humor > 0 
                      ? 'success' 
                      : 'danger'
                    :'primary'} 
            animated 
            value={ props.humor < 0 
                    ? (props.humor * -1)
                    : props.humor} 
          />
        </CardHeader>
        <CardBody>
          <h3 className={ props.humor !== 0 
                          ? props.humor > 1 
                            ? 'smiley smiley-feliz'
                            : 'smiley smiley-triste'
                          :'smiley smiley-normal'}>
          <Link 
            title="Clique e me faça feliz" 
            to={props.link}>
            <span 
              role="img" 
              aria-label="smiley">
                {IconComponent(props.humor)}
            </span>
          </Link>
        </h3>
      </CardBody>
      </Card>
    </div>
  )
}

/**
 *  Exibe o icone de acordo com o valor do humor
 *  @param {int} - props.humor = Valor do humor, pode ir de -100 a 100 
 */
export const IconComponent = (humor) => {
  if(humor >= 100) { return "😂" }
  if(humor >= 85)  { return "😁" }
  if(humor >= 75)  { return "😅" }
  if(humor >= 50)  { return "😄" }
  if(humor >= 35)  { return "😄" }
  if(humor >= 25)  { return "😊" }
  if(humor >= 15)  { return "😏" }
  if(humor >= 1)   { return "🙂" }
  if(humor === 0)  { return "😐" }
  if(humor >= -15) { return "🙁" }
  if(humor >= -25) { return "😕" }
  if(humor >= -35) { return "🤨" }
  if(humor >= -50) { return "😒" }
  if(humor >= -75) { return "😔" }
  if(humor >= -85) { return "😖" }
  if(humor >= -100){ return "😫" }
}