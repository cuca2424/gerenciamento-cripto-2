import Carteiras from "../../componentes/Dashboard/Carteiras";
import AporteSaldo from "../../componentes/Testes/novaDashboard/AporteSaldo";
import AporteSaldo2 from "../../componentes/Testes/novaDashboard/AporteSaldo2";
import AporteSaldo3 from "../../componentes/Testes/novaDashboard/AporteSaldo3";
import GraficoPizza from "../../componentes/Testes/novaDashboard/GraficoPizza";
import MaioresGanhos from "../../componentes/Testes/novaDashboard/MaioresGanhos";
import MaioresPerdas from "../../componentes/Testes/novaDashboard/MaioresPerdas";
import MedoGanancia2 from "../../componentes/Testes/novaDashboard/MedoGanancia2";
import MedoGanancia3 from "../../componentes/Testes/novaDashboard/MedoGanancia3";

function SentimentoDeMercado() {
  return(
    <div className="col-12">
      <div className="row altura">
        <div className="p-2 h-100 col-12 h-sm-50 col-xxl-8">
        <div className="h-100 d-flex flex-column" style={{ padding: "1px" }}>


            <div className="d-flex">
              <h4 class="text-body m-3">
                  Visão Geral
              </h4>
              <select class="form-select form-select-sm ms-auto align-items-center mt-2 me-2" id="select-ad-clicks-month" style={{width: "200px", height: "40px"}}>
                      <option>Todas as carteiras</option>
                      <option>Carteira01</option>
                      <option>Carteira02</option>
                      <option>Carteira01</option>
              </select>
            </div>

            <hr className="m-0 mt-1"/>

            <div className="mx-0 row col-12 flex-grow-1">

              <div className="col-3 col-sm-2 border-end d-flex flex-column justify-content-between">
                  <div className="py-3 border-bottom">
                    <p class="text-body-tertiary mb-4 pt-2 d-flex fs-8">
                          Aportes
                      <div className="text-primary">
                          <span class="fas fa-coins ms-2"></span>
                      </div>                            
                    </p>
                    <h5 class="text-body-highlight mb-2">
                        $1,821.00
                    </h5>
                  </div>
                  <div className=" py-3 border-bottom">
                    <p class="text-body-tertiary mb-4 pt-2 d-flex fs-8">
                      Saldo
                      <div className="text-success">
                          <span class="fas fa-dollar-sign ms-2"></span>
                      </div>
                    </p>
                    <h5 class="text-body-highlight mb-2">
                        $2,345.00
                    </h5>
                  </div>
                  <div className="py-3">
                    <div class="d-flex align-items-center mb-2 gap-2 pt-2">
                      <p class="text-body-tertiary d-flex fs-8">
                      Lucro/Prejuízo
                      <div className="text-danger ms-2">
                          <span class="fw-bold" data-feather="trending-down" style={{width: "24px", height: "24px"}}></span>
                      </div>
                      </p>
                      </div>
                      <h5 class="text-body-highlight mb-2">
                          $541.00 (28%)
                      </h5>
                  </div>
              </div>

              <div className="col-9 h-50 col-sm-5 h-sm-100 border-end">
                <AporteSaldo3 />
              </div>
              <div className="col-12 h-50 col-sm-5 h-sm-100">
                <GraficoPizza />
              </div>

            </div>      
          </div>
        </div>
        <div className="p-2 h-50 col-12 col-sm-6 col-xxl-4">
            <MedoGanancia3 />
        </div>
        <div className="p-2 h-50 col-12 col-sm-6 col-xxl-4">
          <MaioresGanhos />
        </div>
        <div className="p-2 h-50 col-12 col-sm-6 col-xxl-4">
          <MaioresPerdas />
        </div>
        <div className="p-2 h-50 col-12 col-sm-6 col-xxl-4">
          <Carteiras />
        </div>
      </div>
    </div>
  )
}

export default SentimentoDeMercado;