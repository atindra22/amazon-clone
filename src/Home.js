import React from "react";

import Prduct from "./Prduct";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/Unrec/Hero/Desktop/DesktopHero_3000x1200_2x._CB603002124_.jpg"
          alt="No preview"
        />
        <div className="home__row1">
          <Prduct
            id="650"
            title="boAt Rockerz"
            image=<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuoUNu2geUEUQQzjd4C7V0PuVQ2QJsmW6VJXvOvxKWkg&usqp=CAU&ec=48600113" />
            price={5000}
            rating={3}
          />

          <Prduct
            id="690"
            title="boAt Rockerz"
            image=<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTqUdEw3Cu1Gtk4gjW53VnVWB1tYTRXuwfRDy8mYOEDA&usqp=CAU&ec=48600113" />
            price={5670}
            rating={4}
          />

          <Prduct
            id="A50"
            title="boAt Rockerz"
            image=<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdveDKnpKm7fZNpO7VYqsciKldf1bA95fDYfu-nTexWA&usqp=CAU&ec=48600113" />
            price={5980}
            rating={4}
          />

          <Prduct
            id="X50"
            title="boAt Rockerz"
            image=<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQREhUTEhMWEhEVFhUZFhgVFxUXGBIXFxYXFhcVFhYYHiggGRslGxYTITYhJSkrLi4uGCAzODMtNygtLisBCgoKBQUGDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQYEBwIDCAH/xABDEAABAwIDBAcECAMGBwAAAAABAAIDBBESITEFBkFRBxMiYXGBkTJCobEUI1JicoKSwVPR8BUkM6LC4TRDY3OTsvH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A3iiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIo7bu3IKKIy1EgY3QDVz3cGMaM3OPIIJFVjeHfujoyWOeZZh/yoRjePx27LB3uIWq97+kmoqyWRE09PphYbSPH/AFZWnsj7jP1cFRJLkW0brhGQvzsNT3nNBsnbXS9UPuIGxU7eBt9Ik/aMerlUa7fWplv1lTUvB4daIgPBsTRb1VdcxdbkEp/bJ1+t8fpNRf1LlK7N30qISOrqZ47cHPMrD+LHc/BRGx93aqr/AOGppZh9prbM/wDI6zPirfQ9D1e/N5ghH3nuc4eTGkfFBat3Olc9ltYwOachLFlf8TL278jkNQtmbO2jFUMxwvD292o7iNQfFaeh6GKluYqoc9QWSWPjn8dRwWBNHVbGqRE9xBLcUUjCS2Ro9pmYFyORGetuQb6RU/dPfiOqsyUhkpyB915/0nu/+K4ICIiAiIgIiICIiAiIgIiICIiAiIgIigt8d5o9nQGV/akddsUd7GR9r68GjUngO+wIdO+m90WzYsTvrJ3g9VEDYvtq5x91guLu8hckA6A29tyatmM078TjcDg1jT7kbfdb8TxPAdO19py1cr5pn45HnM6DLRrR7rBc2bw7ySTiFB9GS4ucuNySAASSQABmSSbAADUk8FtzcLosAwz7QaHE2LKc5gd832j9zTnfQBRt1dxqraNnRtEUH8aQHCfwN1kPhl3hbe3a6MaGks5zPpMw9+YAgH7kfst+J71dGNAAAAAAsAMgANAAvqD40WyGQX1EQFVukfd36dRPa0fXxfWwHiHtzw+DhdvmrSiDyzT1hFntyDhe3LgWnwII8ltvo9376wtp6h2ZsI3nUHgxx49x/oa93n2WIK6rgAs1svWMHJk7RIAPA4lE4Cw3CD1Giq3RzvD9NpAXm80RwSc3WF2v8xbzBVpQEREBERAREQEREBERAREQEREGNtGuZTxPmldgjjaXOJ4AfM9y8472bfk2hUOmku0ezGy9+qjBuGcr6Fx4nmGtV06ZN5uslFFG76uIh01velsHMZ+QEO8XN+yVrdoQdZauogk2AJJNgBmSTkAANSu9y2t0R7mDs19Q3M507SNB/GI5n3e7PiLBI9GXR8KQNqqpoNWRdjTmKYEehktqeGg4k7GREBERAREQEREGl+lenwbUY7hLSi/4o5CPk8KsyQXVy6ZRatojziqB/miKqrUFi6I6kxVr4vdmjPm6M4m/5TJ6rci0lub2a+nI+2R+pjm/ut2oCIiAiIgIiICIiAiIgIiICi95tsNo6WWocL4G9lt7Y3nsxs/M4tHmpRao6btr5w0jTwM0mfO8cQI5H64+LAg1VPO6R7nvdie4lznfac4lzneZJNu9fMS42X1kZcQ1oLnOIDQNXEmwA7ybILT0d7sf2hU2eP7vFZ0p+19mL81jfuB7l6Ea0AAAWAyAGgHIKC3J3eFBSMhyMh7Urh70jgMWfIZNHc0KeQEREBERAREQEREGoOmd/wDfaMcoZz6vjH7KrQuUx0u1OLarW/wqVg85JHu+TQoGmcgs25zMVbTj79/Rrj+y3QtTdGtPjrA7hHG93rZn+orbKAiIgIiICIiAiIgIiICIiAvO+/Fb9Jr6mS92iQxt7mw/VW/W2Q/mXoKtqBHG+Q6MY5x8Ggn9l5phu5oc723DE7vc7N3xJQYbmK9dD+7/AF9Uah4vHT+zfQyu9n9LbnxLVTntXoDcbY30OjijItIRjk5435kHwFm/lQT6IiAiIgIiICIiAuE0zWNLnuDWtFyXEAADUknRY+1dpR00L55nBkUbSXE8uQAzJOgA1VNjoJtqD6TtBroNnsu+KjvYyhuYlqyNdLiPTnfiGsN96ls1fPUsfjZMWYOQZGwMaR3HM+ax6Rywtrz4pjwtwGQF+1YDzt5LKokG2uiiitHNMfec1jfBouSPEuH6VfVFbr7O+jUsURFnBt3fid2nfEkKVQEREBERAREQEREBERAREQV/f97hs2swAl7oJGtA1Je3ALfqWgYa1rnmMe023x4L0BvzJhopfy/+7T+y88sdE24aMbzrhFz5nQBBZdx9k/SKuCNw7OLG8ZaN7ZBtlmbDzW/1qvoYoSDNM/UBrG/mJe5o8AGeq2ogIiICLjLIGgucQ1oFySQAANSSdAtZb3dLDISY6Ngld/FffAPwNFi/xJA8UGz1gVO26aM2kqIYzyfLG0/ErzRt3eqrqrmoqJHsN+yDhj8MDbN9QoMSAOAaL/hF/UIPWtJtenl/wp4pPwSMd8is1eQGAjEC3LhccfBWzdjf+tosIa8zRDJ0cpLhb7pObfLLuQbl6U4j9AdK1uM00sNQW8HthkDntPdgxei799tstZs18zHXbMxgYR7zZbZj8hcfJfN2t6KXa9NIGGzsDmTRO9qPEC035t1s4a92i1Pt7beLYuzoSe11ZJ8GF8TD+lr/AFCCniTG8u5klXro82T9Iqo2kXYw9Y/wZYgebsI81RaFlyt8dFOx+qpjM4dqY9nuY3IepxHwsgvCIiAiIgIiICIiAiIgIiICIiCm9LcDn7Nka027cZcL2xta4FzLjS4H7LRm1JDEwMYMBtmBYYe7LQrcXSbvI1pZSMs55OKQk+zhALWDvOJpPd45aa240l2fjfn3oMOmivmcz35qxbJ2zV02cE8jAPdxEs/Q67fgq/HLhYXcliN3kIyDQB3oN37tdKYJEdczAdOtjBw+L2ajxF/ALYrtoRCLrusb1OHFjBBaW8wRr5LytT7da/JwsrG+ulgoyA93VyOD+rucI5OtwJ19EEv0hb8PqnGNpMdOPZbpiPB0nM92g8c1rySZxDsWfAHv7u9ZnV9a3G+7g89lo1c7kP3PALhNTEZnXu0aOTe75oIq3A5jlw8+a72P4aDkMh6Bc20tzyCkaeANGQ8+PqgjuoPK3jkuyOTBx+azZY1G1IQZclc/IQEse8FrnMJacLsi02tcFdm1aguLI73bCxsbdPdAHBYMF43Z+0M7cvFdtLGXOQWPc/ZDqmaOJur3AX5DVzvIAnyXpGmgbGxrGCzWtDWjkALBa86IthYI3VLhm67I/AHtuHmAPylbHQEREBERAREQEREBERAREQFF7xbRdBDdn+I44WX0BIJLj3AAnxsOKlFXN9nYY2O4YiPMi/7FBpveu4qGWOJ5c8XPMlrnPJ54SfiofeKxDSDe4ytxUlvvcguGo7XwwPHmwj0KgmOa/IG8cbGgenzJJQYUNiC06EKIqKOylHixyX2VuIXHn/NBE7JoOtnjjPsud2vwjN3wBVsrpnyT4Q5vUm/g0AZ+lrrB3eZhlc8C5bGbebm/tdS2xqQEnKwc4k3+yLOI8C7APC6DvpKIAB1rZWYDqxmuf3jqfTgovaswacI9rj3f7qf23U9Swn3jk0d/PyVLcbm5zJ+KDujes6F6iw5dsU9kEs5twoqtOAgnh8+CzYKoFYu2I74Twvn6ZIMGK5zOpVi2LR8SozZ1Njd3DVW6ghsEG3ujus6yja06xOczy9pvwcB5KzqldGA+qm5dYPXCL/srqgIiICIiAiIgIiICIiAiIgKK3noTPTSMbm8DEzvc3O3nmPNSqIPNW26vECPT+vC481XNn1Nj1PAuuL/I+GavvTBu06kqOvjH92nJOWkcurmHkHZuH5hwC10IcWfEZoJGeIG9lhdZgN12xVBaA213E68/6/ru51MAcDnmg+0NQ0OJacJI9Df5WupQzmOB5BNxYAtNrHGTl6geSp5c6KQO4A5940PwVhimGHQWxMI0ItiHrldBz2vUOkLQ43LWgHxObj8vRRrgpqaDESeZJWHNRlBHErgXrtmjIXRhQcw9Z1NU4m2c3EO/K6wGMubBSMMaDIjgIH93kDD9mQfJw18FYNlu7Ibe4aALn3rCxKg42cBqVc9z9iGolZEPZ1efssGp8ToO8oNo7hUfVUbCRYyEv8jk3/KGnzViXGNgaAALAAAAcANAuSAiIgIiICIiAiIgIiICIiAiIght8dlNq6OaFzcQLLgccTCHttyN2heeHbM6pxBzHA8wvUC05vjuRUwySSwhstLZzhnZ8R1DXDiL5YhfvCDX1TQhwy+Go7x/L0z1i3AxntcdHcD/ACKlKDarJRb2H8Wu18uawdp1IJIHnyPiEGLUQh4WPTtLAWHMHNp5EfLj6r41p04ctR6ahZ0cDnWsL8NRbxN0E1SyBzQe5d9gujZmxaqVkhhgdIIm4nYM7Aa5DU8mi5NtFCmsc45GwPFBOS0rXKJrdmObctzC6HknQnDzJzK7KaIk4W5D9kExuvu1NUAvjY0gOwlzy0MYbXL331a0WysbkjIi6kNuUdJG0dRI58gNnFrbQya4jHcl1gbDiDfLQ2iI4HxkGJxzyPDLkeY7irBsDdiorn9ltwLAuIDY2egt+UDyQYGxNnPle1rGl8jzZrR/WQ71vbdPd9tFDhydK6xkdzPBo+6P5niuO6260VC3s9uUjtSEZn7rR7re71up5AREQEREBERAREQEREBERAREQEREBcJ4g9rmuF2uBBHMEWIXNEHlLpA2CaSslZawLi5p045kfA/mCm+jrc+Ha0ErRM6CtgcDcjGyWN/sksuCCCHC4PEEgrYXTbu310AqYxd7MnW48vUXHiGrUfR/vD/Z1dFUE/Un6ub/ALb7XPkQ135UF0PRNWxHIRyjmx4HweAp7YfRhM5wNSWxRjUNIdI7uBHZb45+HFbZa4EAg3BzBHEc19QYuzdnx08YihYI426AfMnUnvOa1x0sbC2cxhne0x1bzcdUQ3rTxdI0gg+NgTz1teN6d4oqCEySG7s8DeLj/Jedt4Nty1szpZSSSchyHAAcEGA92I5C3AAcByVp3M3XkrZOrj7LRnJIRcMHDLK5PAX5rB3W3flq5hFEO0c3OPsxN4ud/Licl6E3e2JFRQthiGQzc4+1I46ud3/LIIILZPR3Sw2L8U7h9s2b+luvmSrZFE1gDWgNaMgGgAAcgBouaICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiDoraVssbo3i7XAg/zHeNV5d3t2OaKtlhtob2sbWdmCPunUenBeqVX97dz6faLQJmlsjQcErMnsvw5Ob90/A5oK50ObyfSKb6K8/W04Abf34dGEc8PseAbzVx3j2wyjp3zvzawDLmSbAE8MyFVtzejhuz6jrzO6Uta5rBhwWxZOxWccXhpex4BXDauzo6mF8EzcUUjcLhcjLmCMwQbEEaEIPNm8+8MtdMZJCbe63g0cAB/XxJPPdvYMtXK2KFuKQ6k+zG3i5x4Af7BbHl6GmB946pwjvo+MOc0csQcAT32V93a3choIurhBuc3vdYvkPNx5DgBkPVB83W3dioIRHHm42MjyO1I7meQ5Dh6kzCIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIP//Z" />
            price={6700}
            rating={5}
          />
        </div>
      </div>

      <div className="home__row2">
        <div className="home__row2_product">
          <Prduct
            id="Navneetx10"
            title="Set of 2 notebooks"
            image=<img src="data:image/jpeg;base64,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" />
            price={399}
            rating={5}
          />
          <Prduct
            id="Akhandanand_101"
            title="Mirzapur's Famous Kaleen"
            image=<img src="data:image/jpeg;base64,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6u/tqp7wbsPRpw/EH4z/ANXdH/X8Wg16aKyOOUjFn63Fi2u34INwfs7XxZzU2w3d7rN9N3HXSdpXROBdkKGHhzv9yoL5nCwNu63QesnxUiawAQBHkvYWmOOMTxM/WZMu10vACqiKwyBERAEREAREQBERAEREAREQBERAajjfAqOKZlqtuO64Wc3yPTw0XKuO8BrYN0VBmYdKjRynSx1yu2g+krtatV6DXtLXtDmmxDhIPoq541I19N1k8DrleDgZE72/npp70VAY+o/spt2k7DvpzUwkuZqackubrOU6uH6dfNQs9HSI2No3jwWSUHF0z6DB1MM0bi/9PR5vZ/ydwPcq3ohJH8eRi69MeT9Pp63Pgol1nrX3/b9lQiN/dtxrqtnwns/iMTBpMhsxmcS1ug5gY5tdBOl1O+D9hKFOH1z8Z/jIb17s83r8lZHHKRlzddixd7fhHP8AhfCa+IdFFhcAYLu61vmTYeQU+4J2Do04fiD8R42kho9PxetvBS+nSDRDQABoAIHyCuLRHFGJ42fr8mTZbL0PFOmGgBoAAsABAA8AriIrTCEREAREQBERAEREAREQBERAEREAREQBERAEREBQqPcf7K0MVLiMlTZ7ReYgZh+IefzUhRcaT2ZKE5QeqLpnHq/Y/FtqikGBwdMPaeXLNySQcpvofSVNOCdiaFGH1R8V+vMOUH9LD9zOmylqKEcUU7NOXrc2SOluvp3AaqoisMgREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREB//2Q==" />
            price={110000}
            rating={5}
          />
          <Prduct
            id="GodrejL50"
            title="Godrej Locker"
            image=<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuKkY-GVXo9DJA0UxQMh_NUfQE217B9XOKSbvc9UfaWQ&usqp=CAU&ec=48600113" />
            price={9700}
            rating={5}
          />
        </div>
      </div>
    </>
  );
}

export default Home;