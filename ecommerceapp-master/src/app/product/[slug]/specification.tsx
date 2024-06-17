
import React from 'react'

interface SpecificationData {
  id: number;
  title: string,
  type: string,
}

interface SpecProps {
  specifications: SpecificationData[],
}

export const Spec: React.FC<SpecProps> = ({ specifications }) => {
  return (
    <>
      <div className="bgspeccontainer">
        <div className="frame-wrapper">
          <div className="mapping">

            {
              specifications.map((item) => {
                return (
                  <>
                    <div className="specification" key={item.id}>
                      <div className="specification-title">
                        {item.title}
                      </div>
                      <div className="specification-type">
                        {item.type}

                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>

    </>
  )
}

