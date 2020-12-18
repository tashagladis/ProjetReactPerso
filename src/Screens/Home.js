
import React, { useEffect, useState } from 'react'
import CharactersList from '../components/charactersList'
import ListRowHarryPotter from '../components/listRowHarryPotter'
import ListRowStarWars from '../components/listRowStarWars'
import axios from 'axios'
import Pagination from '../components/pagination'

const Home = () => {
  const [charactersHarryPotter, setCharactersHarryPotter] = useState([])
  const [charactersStarWars, setCharactersStarWars] = useState([])
  const [total, setTotal] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const valueOffset = 5

  const getHarryPotter = () => {
    axios({
      method: 'GET',
      url: ' http://hp-api.herokuapp.com/api/characters'
    })
      .then(res => {
        setCharactersHarryPotter(res.data)
      })
      .catch(err => err)
  }

  const getStarWars = () => {
    axios({
      method: 'GET',
      url: 'https://swapi.dev/api/people/',
      params:{
          offset: valueOffset * currentPage
      }
    })
      .then(res => {
        setCharactersStarWars(res.data.results)
        setTotal(res.data.count)
      },[currentPage])
      .catch(err => err)
  }

  useEffect(() => {
    getHarryPotter()
    getStarWars()
  }, [])

  return (
    <div>
        <div>
      <CharactersList
        component={ListRowHarryPotter}
        list={charactersHarryPotter}
      ></CharactersList>
      </div>
      <div>
      <CharactersList
        component={ListRowStarWars}
        list={charactersStarWars}
      ></CharactersList>
      </div>
 
    </div>
  )
};

export default Home;