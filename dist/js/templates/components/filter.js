const filter_template = `

{{#is_county}}
    <div class="col-md-3 col-sm-3 col-xs-12">
        <select class="form-control m-r-5 mb-1" id="county-dropdown" name="county" multiple placeholder="Select county" title="Select county">
            <!--<option selected="true" disabled="" value="">Select County</option>-->
            <option selected="true" value="HfVjCurKxh2">Kenya</option>
            <option value="vvOK1BxTbet">Baringo County</option>
            <option value="HMNARUV2CW4">Bomet County</option>
            <option value="KGHhQ5GLd4k">Bungoma County</option>
            <option value="Tvf1zgVZ0K4">Busia County</option>
            <option value="MqnLxQBigG0">Elgeyo Marakwet County</option>
            <option value="PFu8alU2KWG">Embu County</option>
            <option value="uyOrcHZBpW0">Garissa County</option>
            <option value="nK0A12Q7MvS">Homa Bay County</option>
            <option value="bzOfj0iwfDH">Isiolo County</option>
            <option value="Hsk1YV8kHkT">Kajiado County</option>
            <option value="BjC1xL40gHo">Kakamega County</option>
            <option value="ihZsJ8alvtb">Kericho County</option>
            <option value="qKzosKQPl6G">Kiambu County</option>
            <option value="nrI2khZx3d0">Kilifi County</option>
            <option value="Ulj33KBau7V">Kirinyaga County</option>
            <option value="sPkRcDvhGWA">Kisii County</option>
            <option value="tAbBVBbueqD">Kisumu County</option>
            <option value="j8o6iO4Njsi">Kitui County</option>
            <option value="N7YETT3A9r1">Kwale County</option>
            <option value="xuFdFy6t9AH">Laikipia County</option>
            <option value="NjWSbQTwys4">Lamu County</option>
            <option value="yhCUgGcCcOo">Machakos County</option>
            <option value="BoDytkJQ4Qi">Makueni County</option>
            <option value="R6f9znhg37c">Mandera County</option>
            <option value="Eey8fT4Im3y">Marsabit County</option>
            <option value="Y52XNJ50hYb">Meru County</option>
            <option value="fVra3Pwta0Q">Migori County</option>
            <option value="wsBsC6gjHvn">Mombasa County</option>
            <option value="ahwTMNAJvrL">Muranga County</option>
            <option value="jkG3zaihdSs">Nairobi County</option>
            <option value="ob6SxuRcqU4">Nakuru County</option>
            <option value="t0J75eHKxz5">Nandi County</option>
            <option value="kqJ83J2D72s">Narok County</option>
            <option value="uepLTG8wGWJ">Nyamira County</option>
            <option value="mYZacFNIB3h">Nyandarua County</option>
            <option value="ptWVfaCIdVx">Nyeri County</option>
            <option value="o36zCRjSd4G">Samburu County</option>
            <option value="u4t9H8XyU9P">Siaya County</option>
            <option value="QyGNX2DpR4h">Taita Taveta County</option>
            <option value="JsH2bnvNt2d">Tana River County</option>
            <option value="T4urHM47nlm">Tharaka Nithi County</option>
            <option value="mThvosEflAU">Trans Nzoia County</option>
            <option value="kphDeKClFch">Turkana County</option>
            <option value="pZqQRRW7PHP">Uasin Gishu County</option>
            <option value="sANMZ3lpqGs">Vihiga County</option>
            <option value="CeLsrJOH0g9">Wajir County</option>
            <option value="XWALbfAPa6n">West Pokot County</option>
        </select>
    </div>
{{/is_county}}

{{#is_subcounty}}
    <div class="col-md-3 col-sm-3 col-xs-12">
        <select class="form-control m-r-5 mb-1" id="subcounty-dropdown" name="subcounty" multiple disabled placeholder="Select subcounty" title="Select subcounty">
        <!--<option selected disabled>Select subcounty</option>-->
        </select> 
    </div> 
{{/is_subcounty}}

{{#is_ward}}
    <div class="col-md-2 col-sm-3 col-xs-12">
        <select class="form-control m-r-5 mb-1" id="ward-dropdown" name="ward">
        <option selected disabled>Select ward</option>
        </select> 
    </div> 
{{/is_ward}}

{{#is_facility}}
    <div class="col-md-2 col-sm-3 col-xs-12">
        <select class="form-control m-r-5 mb-1" id="facility-dropdown" name="facility">
        <option selected disabled>Select facility</option>
        </select> 
    </div> 
{{/is_facility}}
{{#is_period}}
    <div class="col-md-6">
        <div class="row">
            <div class="col-md-6">
                <div class="input-group">
                    <div class="checkbox m-l-10 m-r-10">
                        <label>
                            <input class="form-control" type="checkbox" value="is_range" id="is_range" name="is_range" checked>
                            Range
                        </label>
                    </div>

                    <select class="form-control yearsfilt" id="period-dropdownFrom">
                        <option value="" disabled selected>Year {{#is_period_range}} from {{/is_period_range}}</option>
                    </select>
                    
                    <select class="form-control" id="period-dropdownFromQs" disabled>
                        <option value="" selected>All year</option>
                        <option value="1" >Q1 (Jan-Mar)</option>
                        <option value="2" >Q2 (Apr-Jun)</option>
                        <option value="3" >Q3 (Jul-Sept)</option>
                        <option value="4" >Q4 (Oct-Dec)</option>
                    </select>
                </div>
            </div>
            {{#is_period_range}}
                <div class="col-md-6">
                    <div class="input-group">
                        <select class="form-control yearsfilt" id="period-dropdownTo" disabled>
                            <option value="" disabled selected>Period to</option>
                        </select>
                        
                        <select class="form-control" id="period-dropdownToQs" disabled>
                            <option value="" selected>All year</option>
                            <option value="1" >Q1 (Jan-Mar)</option>
                            <option value="2" >Q2 (Apr-Jun)</option>
                            <option value="3" >Q3 (Jul-Sept)</option>
                            <option value="4" >Q4 (Oct-Dec)</option>
                        </select>
                    </div> 
                </div> 
            {{/is_period_range}}
        </div>
    </div>
{{/is_period}}
`;

$(document).ready(function () {
    setTimeout(() => {
    
        $("#county-dropdown").on('change', function (ev) {
            let v_al = $(this).val()
            if(v_al != "HfVjCurKxh2"){
                window.sessionStorage.setItem("ouFilterType", "county")
            }
            changeHashOnFilter({ou:v_al})
            if(v_al != 'HfVjCurKxh2' && v_al != ''){
                $("#subcounty-dropdown").removeAttr('disabled')
                fetchSubcounties(v_al);
            }else{
                $("#subcounty-dropdown").attr('disabled', true)
            }
        })
        
        $("#subcounty-dropdown").on('change', function (ev) {
            let v_al = $(this).val()
            window.sessionStorage.setItem("ouFilterType", "subcounty")
            changeHashOnFilter({ou:v_al})
        })
        
        $("#ward-dropdown").on('change', function (ev) {
            let v_al = $(this).val()
            changeHashOnFilter({ou:v_al})
        })
        
        $("#facility-dropdown").on('change', function (ev) {
            let v_al = $(this).val()
            changeHashOnFilter({ou:v_al})
        })


        
        
        $("#period-dropdownFrom").on('change', function (ev) {
            let v_al = $(this).val();
            if(v_al.includes('/')){ v_al = v_al.replace('/', 'W') }
            changeHashOnFilter({pe:v_al})
            $('#period-dropdownFromQs').removeAttr('disabled')
            $('#period-dropdownTo').removeAttr('disabled')
            sessionStorage.removeItem("periodIsQuarters")
            $($('#period-dropdownTo option')).each(function (ix, ele) {
                if(ele.getAttribute('value') < v_al){
                    ele.setAttribute('disabled', true)
                }
            });
        })
        $("#period-dropdownFromQs").on('change', function (ev) {
            sessionStorage.setItem("periodIsQuarters", true)
            let p_val = $("#period-dropdownFrom").val()
            let v_al = $(this).val();
            let v_alq = p_val+"Q"+v_al //""
            
            // if(sessionStorage.getItem("isPeriodRange") === "false" || !sessionStorage.getItem("isPeriodRange") ){
            //     v_alq = p_val+"Q"+v_al
            // }else{
            //     if(v_al != null && v_al != ""){
            //         for (let d = 1; d <= parseFloat(v_al); d++) {
            //             v_alq += p_val+"Q"+d+";"
            //         }
            //         v_alq = v_alq.substr(0,v_alq.length-1)
            //     }
            // }
            console.log("fromQs = ", v_alq);
            if(v_alq.includes('/')){ v_alq = v_alq.replace('/', 'W') }
            changeHashOnFilter({pe:v_alq})
            $('#period-dropdownToQs').removeAttr('disabled')
        })
        $("#period-dropdownTo").on('change', function (ev) {
            let v_al = $(this).val();
            let v_al_fr = $('#period-dropdownFrom').val();
            if(v_al.includes('/')){ v_al = v_al.replace('/', 'W') }
            if(v_al_fr.includes('/')){ v_al_fr = v_al_fr.replace('/', 'W') }
            changeHashOnFilter({pe: v_al_fr, pe_to:v_al})
        })
        $("#period-dropdownToQs").on('change', function (ev) {
            let p_val = $("#period-dropdownTo").val()
            let v_al = $(this).val();
            
            let v_al_fr = $('#period-dropdownFrom').val();
            let v_al_fr_qs = $('#period-dropdownFromQs').val();
            let v_alf = v_al_fr+"Q"+v_al_fr_qs //""
            // if(v_al_fr_qs != null && v_al_fr_qs != ""){
            //     for (let d = 1; d <= parseFloat(v_al_fr_qs); d++) {
            //         v_alf += v_al_fr+"Q"+d+";"
            //     }
            //     v_alf = v_alf.substr(0,v_alf.length-1)
            // }

            let v_alq = p_val+"Q"+v_al //""
            // if(v_al != null && v_al != ""){
            //     for (let d = 1; d <= parseFloat(v_al); d++) {
            //         v_alq += p_val+"Q"+d+";"
            //     }
            //     v_alq = v_alq.substr(0,v_alq.length-1)
            // }
            
            if(v_alq.includes('/')){ v_alq = v_alq.replace('/', 'W') }
            changeHashOnFilter({pe: v_alf, pe_to:v_alq})
        })

        $("#is_range").on('change', function (v) {
            let v_al = $(this).is(':checked')
            changeHashOnFilter({range: v_al.toString()})
            sessionStorage.setItem('isPeriodRange',v_al)
        })




        let this_yr = new Date().getFullYear()
        for (let l = 0; l <= 5; l++) {
            let y_r = this_yr - l
            $('.yearsfilt').append('<option value="'+y_r+'">'+y_r+'</option>')
        }
    }, 500);
});

const getQuartersBtwnPeriod = (p1,p2) => {
    let y1 = p1.substr(0,p1.length-2)
    let y2 = p2.substr(0,p2.length-2)

    ///////
    let bg = Math.max(parseFloat(y1), parseFloat(y2))
    let sm = Math.min(parseFloat(y1), parseFloat(y2))
    let diff = bg - sm
    let yrs = []
    for (let k = 0; k <= diff; k++) {
         yrs.push( sm + k )
    }
    let gq = ''
    yrs.map(yr=>{
        gq += ''+getQuartersInYear(yr)+';'
    })
    ///////
    let split_1 = gq.split(p1)[1]
    let split_2 = split_1.split(p2)[0]
    let final_pe = p1+split_2+p2
    return final_pe
}


const getPeBtwnYears = (y1, y2, returntype) => {
    let bg = Math.max(parseFloat(y1), parseFloat(y2))
    let sm = Math.min(parseFloat(y1), parseFloat(y2))
    let diff = bg - sm
    let yrs = []
    for (let k = 0; k <= diff; k++) {
         yrs.push( sm + k )
    }

    if(returntype && returntype == 'months'){
        let mnths = ''
        yrs.map(yr=>{
            mnths += ''+gMonthsInYear(yr)+';'
        })
        return mnths
    } else if(returntype && returntype == 'weeks'){
        let wks = ''
        yrs.map(yr=>{
            wks += ''+gWeeksInYear(yr)+';'
        })
        return wks
    } else if(returntype && returntype == 'quarters'){
        if(sessionStorage.getItem('isPeriodRange') === 'true' && sessionStorage.getItem('periodIsQuarters') === 'true'){
            return getQuartersBtwnPeriod(y1,y2)
        }else if(sessionStorage.getItem('isPeriodRange') === 'false' && sessionStorage.getItem('periodIsQuarters') === 'true'){
            return y1+';'+y2
        }
        let qtrs = ''
        yrs.map(yr=>{
            qtrs += ''+getQuartersInYear(yr)+';'
        })
        return qtrs
    }else{
        return yrs
    }
}
let getDefaultPeriod = () =>{
    let yr = new Date().getFullYear();
    let mn = parseFloat(new Date().getMonth())+1
    let qt
    if(mn<4){
        qt = 1   
    }else if(mn>=4 && mn < 7){
        qt = 2   
    }else if(mn>=7 && mn < 10){
        qt = 3   
    }else if(mn>=10){qt = 4}

    let dp = ''
    for (let c = 1; c <= qt; c++) {
        dp += yr+'Q'+c+';'
    }
    return dp
}

const getQuartersInYear = yr => {
    let t_yr = new Date().getFullYear();
    if(yr && yr == t_yr){return getDefaultPeriod()}
    if(!yr || yr.length <4){ yr = 2020 }
    return ''+yr+'Q1;'+yr+'Q2;'+yr+'Q3;'+yr+'Q4';
}

function changeHashOnFilter(new_param){ //new_param = {ou: 'Hfvgj5...'} OR {pe: '2020W12'}

    let curr_hash = window.location.hash.substr(1)
    let curr_hash_obj = munchHash(curr_hash)
    let newHash = {}
    if(new_param.range != null && new_param.range != ""){ 
        // new_param.range = new_param.range.toString(); 
        newHash.range = new_param.range }else{
        if(curr_hash_obj.range) newHash.range = curr_hash_obj.range
    }
    if(new_param.pe){ newHash.pe = new_param.pe }else{
        if(curr_hash_obj.pe) newHash.pe = curr_hash_obj.pe
    }
    if(new_param.pe_to){ newHash.pe_to = new_param.pe_to }else{
        if(curr_hash_obj.pe_to) newHash.pe_to = curr_hash_obj.pe_to
    }
    if(typeof new_param.ou == "object" && new_param.ou.length > 1){ new_param.ou = new_param.ou.join(";") }
    if(new_param.ou){ newHash.ou = new_param.ou }else{
        if(curr_hash_obj.ou) newHash.ou = curr_hash_obj.ou
    }
    let enc_hash = spreadHash(newHash)
    const new_url = `${window.location.origin}${window.location.pathname}${enc_hash}`
    window.location.hash = enc_hash
}

function setPeriodVal(pv) {
    $('#period-dropdownFrom').val(pv)
    $('#period-dropdownFrom').change()
}

const fetchSubcounties = county_id => {
    $("#subcounty-dropdown").html('')//<option disabled selected value="">Select subcounty</option>')
    let arr_of_counties = []
    if(typeof county_id == 'object'){
        arr_of_counties = county_id
    }else
    if(typeof county_id == 'string' && county_id.includes(',')){
        arr_of_counties = county_id.split(',')
    }else{
        arr_of_counties.push(county_id)
    }
    arr_of_counties.map(c_id=>{
        justFetch(`https://41.89.64.12/dhis/api/organisationUnits/${c_id}.json?includeChildren=true&fields=id,name`, {})
        .then(response=>{
            if( response.error ){
                throw JSON.stringify(response)
            }
            let subc = response.organisationUnits;
            subc.map(sc=>{
                $("#subcounty-dropdown").append('<option value="'+sc.id+'">'+sc.name+'</option>')
            })
            $("#subcounty-dropdown").removeAttr('disabled')
        })
        .catch(er=>{
            console.error('error: '+er)
        })
    })
}