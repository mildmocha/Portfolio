// JavaScript 모듈 및 컨트롤러 생성
const app = (function() {
    // 모듈 생성
    const app = {};
  
    // 컨트롤러 생성
    function mainCtrl() {
      const $scope = {
        boxes: [
          {
            name: 'Friends',
            image: 'https://source.unsplash.com/uAgLGG1WBd4/900x900'
          },
          {
            name: 'Free',
            image: 'https://source.unsplash.com/Cp-LUHPRpWM/900x900'
          },
          {
            name: 'Explore',
            image: 'https://source.unsplash.com/7BjmDICVloE/900x900'
          },
        
        ],
        selected: [],
        selectBox(item, position) {
          $scope.selected = [{ item, position }];
        },
        clearSelection() {
          $scope.selected = [];
        }
      };
  
      return $scope;
    }
  
    // 컨트롤러 등록
    app.mainCtrl = mainCtrl;
  
    // 지시자 생성
    function boxDirective() {
      return {
        restrict: 'E',
        scope: {},
        controllerAs: 'box',
        controller() {
          const box = this;
  
          box.goFullscreen = function(e) {
            box.onSelect(box.item, e.target.getBoundingClientRect());
          };
        },
        link(scope, element) {
          element.addEventListener('click', scope.box.goFullscreen);
          element.style.backgroundImage = `url(${scope.box.item.image})`;
        }
      };
    }
  
    function bigBoxDirective() {
      return {
        restrict: 'AE',
        scope: {},
        controllerAs: 'box',
        controller() {
          const box = this;
        },
        link(scope, element) {
          const css = {};
          for (const key in scope.box.position) {
            css[key] = `${scope.box.position[key]}px`;
          }
  
          Object.assign(element.style, css);
  
          setTimeout(function() {
            element.style.top = '50%';
            element.style.left = '10%';
            element.classList.add('image-out');
          }, 200);
  
          setTimeout(function() {
            element.style.width = '80%';
            element.style.height = '100%';
          }, 500);
  
          setTimeout(function() {
            element.classList.add('show');
          }, 800);
        }
      };
    }
  
    // 지시자 등록
    app.boxDirective = boxDirective;
    app.bigBoxDirective = bigBoxDirective;
  
    return app;
  })();
  
  // JavaScript 모듈과 컨트롤러를 사용하는 예시
  const mainCtrl = app.mainCtrl();
  console.log(mainCtrl.boxes); // 박스 데이터 확인
  
  // boxDirective, bigBoxDirective 등 다른 기능 사용 가능
  