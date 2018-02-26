(function(window){
    
       $('#start').click(function(){
          "use strict";
           console.log(navigator);
           let options = { "dictionary": "["+
                            "{"+
                              "'Name':'Account Name',"+
                              "'Mandatory':true,"+
                              "'Patterns': '^[a-zA-Z0-9\\\\s]+$',"+
                              "'Keywords': ["+
                                "'Account Name',"+
                                "'Account Name'"+
                              "]"+
                            "},"+
                            "{"+
                              "'Name':'BPay Biller Code',"+
                              "'Mandatory':true,"+
                              "'Patterns': '^[\\\\d]{5,}$',"+
                              "'Keywords': ["+
                                "'Biller Code:',"+
                                "'Biller Code'"+
                              "]"+
                            "},"+
                            "{"+
                              "'Name':'BPay Reference',"+
                              "'Mandatory':true,"+
                              "'Patterns': '^[\\\\d\\\\s]{15,}$',"+
                              "'Keywords': ["+
                                "'Ref:',"+
                                "'Ref'"+
                              "]"+
                            "},"+
                            "{"+
                              "'Name':'Service Address',"+
                              "'Mandatory':true,"+
                              "'Patterns': '^[a-zA-Z0-9,.\\\\s]+$',"+
                              "'Keywords': ["+
                                "'Service Address',"+
                                "'Service Address'"+
                              "]"+
                            "},"+
                            "{"+
                              "'Name':'Account Number',"+
                              "'Mandatory':false,"+
                              "'Patterns': '^[0-9\\\\s]+$',"+
                              "'Keywords': ["+
                                "'Account Number',"+
                                "'Customer Number',"+
                                "'Customer No',"+
                                "'Assessment Number',"+
                                "'Account No'"+
                              "]"+
                            "},"+
                            "{"+
                              "'Name':'Amount Due',"+
                              "'Mandatory':true,"+
                              "'Patterns': '^\\\\$[\\\\d,]+\\\\.[\\\\d]{2}$',"+
                              "'Keywords': ["+
                                "'Amount Due',"+
                                "'Amount by'"+
                              "]"+
                            "},"+
                            "{"+
                              "'Name':'Due Date',"+
                              "'Mandatory':true,"+
                              "'Patterns': '^[0-9]{1,2}[\\\\s]{0,4}(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[\\\\s]{0,4}[0-9]{4}$',"+
                              "'Keywords': ["+
                                "'Payment Due',"+
                                "'Due Date',"+
                                "'Due by',"+
                                "'Simply pay by',"+
                                "'Date Due',"+
                                "'Please pay by',"+
                                "'Due date for payment',"+
                                "'Pay by'"+
                              "]"+
                            "},"+
                            "{"+
                              "'Name':'Issue Date',"+
                              "'Mandatory':true,"+
                              "'Patterns': '^[0-9]{1,2}[\\\\s]{0,4}(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[\\\\s]{0,4}[0-9]{4}$',"+
                              "'Keywords': ["+
                                "'Issue Due',"+
                                "'Issue Date'"+
                              "]"+
                            "},"+
                            "{"+
                              "'Name':'Invoice #',"+
                              "'Mandatory':true,"+
                              "'Keywords': ["+
                                "'Invoice #',"+
                                "'Invoice #'"+
                              "]"+
                            "},"+
                            "{"+
                              "'Name':'Service Category',"+
                              "'Mandatory':true,"+
                              "'Keywords': ["+
                                "'Service Category',"+
                                "'Service Category'"+
                              "]"+
                            "}"+
                          "]",
                  "country": "Australia",
                  "debug": true };
           window.capture.docRecognize(captureSuccess, captureError, options);
    
       });
    
        // capture callback
       function captureSuccess(result) {
          "use strict";
           let str = result; //JSON.stringify(result);
           console.log(str);			   
           $("#result_str").text("result:"+str);
       };
   
       // capture error callback
       var captureError = function(error) {
           console.error("Error code: ", error.code);
           $("#result_str").text("OCR failed:"+error.message);
       };
   
   })(window);