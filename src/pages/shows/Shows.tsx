import React, { useEffect, useState } from 'react'

// Import Components
import { Card } from '../../components/Card/Card'
import { Header } from '../../components/Header/Header'

// shows Service
import { getShows } from '../../services/showsService'

import { useHistory, withRouter } from 'react-router'

// Import CSS
import './Shows.scss'

const Shows = () => {
  const router = useHistory()
  const [shows, setShows] = useState([] as any)
  const getAllShows = () => {
    getShows().then((data) => {
      setShows(data)
    })
  }

  useEffect(() => {
    getAllShows()
  }, [])

  return (
    <>
      <div className="container">
        <Header title="TV SHOWS" />
        <div className="body-wrapper">
          {shows.length
            ? shows.map((item: any) => (
                <Card
                  key={item.show.id}
                  onClick={() =>
                    router.push({
                      pathname: '/information',
                      state: { show: item },
                    })
                  }
                  thumbnail={item.show.image?.medium}
                  title={item.show.name}
                  description={item.show?.status}
                />
              ))
            : null}
        </div>
      </div>
    </>
  )
}

export default withRouter(Shows)
