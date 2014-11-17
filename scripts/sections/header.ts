$('.//div[@id="Container"]') {
  hide("./div[@id='AjaxLoading']")
  insert_top("header", class: "mw-header") {
    move_here("..//div[@id='Logo'][1]") {
      $(".//h1/a") {
        add_class("mw-title-heading")
      }
    }
    move_here("..//div[@id='TopMenu'][1]") {
      remove(".//li[@class='CartLink']/preceding-sibling::li")
      $(".//ul") {
        add_class("mw-header-actions")
        $(".//li") {
          $("./div") {
            wrap_text_children("span") {
              remove()
            }        
          }
          $(".//a") {
            remove("following-sibling::*")
            $data_count = ""
            add_class("mw-header-action")
            $("./span") {
              text() {
                replace(/\((\d+)\s/) {
                  $data_count = $1
                }
              }
            }
            fetch("./@href") {
              replace(/\/(\w+)\.php/) {
                $icon_name = $1
              }
            }
            text(" ")  
            attributes( data-count: $data_count)      
            insert("i", class:"sprites-" + $icon_name)
          }
        }
      }
    }
  }
}