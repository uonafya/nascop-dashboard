const nav_template = `
<ul id="sidebarnav" class="p-t-30">
    <li class="sidebar-item">
        <a class="sidebar-link" href="${window.location.origin}" aria-expanded="false">
            <span class="text-white text-bold">&larr;</span>&nbsp;
            <span class="hide-menu">Back to DHIS2</span>
        </a>
    </li>
    <li class="sidebar-divider">
        <br/>
    </li>
    
    
    <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="fa-small fa fa-th fcwhite hidden"></i><span class="hide-menu">Sub County Supportive Supervision</span></a>
        <ul aria-expanded="false" class="collapse  first-level">
            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="index.html" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">Target Population</span></a></li>
            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="scs-vaccinesupmgt.html" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">Vaccine Supply & Management</span></a></li>
            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="scs-planningsupportsup.html" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">Planning & Supportive Supervision</span></a></li>
            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="scs-datamgt.html" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">Data Management</span></a></li>
            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="scs-perfmonitoring.html" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">Performance Monitoring</span></a></li>
            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="scs-datause.html" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">Data Use</span></a></li>
        </ul>
    </li>
    <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-receipt"></i><span class="hide-menu">Health Facility Supportive Supervision</span></a>
        <ul aria-expanded="false" class="collapse  first-level">
            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="hfs-targetpopservicedelivery.html" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">Target Population & Service Availability</span></a></li>

            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="hfs-supervision.html" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">Supervision</span></a></li>

            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="hfs-defaultertracing.html" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">Planning, Defaulter Tracing & Outreach Services</span></a></li>
            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="hfs-vaccinesupply.html" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">Vaccine Supply</span></a></li>
            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="hfs-vaccinemgt.html" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">Vaccine Management</span></a></li>
            

         <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-receipt"></i><span class="hide-menu">Data Management, Quality & Use </span></a>
            <ul aria-expanded="false" class="collapse  first-level">
                <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="datamgt-recordingtool.html" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">Use of Recording Tool</span></a></li>

                <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="datamgt-archiving.html" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">Archiving</span></a></li>

                <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="datamgt-monitoringchrt.html" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">Monitoring Chart</span></a></li>

                <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="datamgt-datacongruence.html" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">Data Congruence</span></a></li>
                <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="datamgt-rr.html" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">Reporting Rate</span></a></li>
                <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="datamgt-datareview.html" aria-expanded="false"><i class="mdi mdi-border-inside"></i><span class="hide-menu">Data Review Meeting</span></a></li>
            </ul>
          </li>
          <li class="sidebar-item ">
            <a class="sidebar-link" href="vaccinesafe.html" aria-expanded="false">
                <small class="text-muted text-smaller"><i class="fa-small fa fa-th fcwhite hidden"></i></small>&nbsp;
                <span class="hide-menu">Vaccine Safety</span>
            </a>
        </li>
        <li class="sidebar-item">
        <a class="sidebar-link" href="aefi.html" aria-expanded="false">
            <small class="text-muted text-smaller"><i class="fa-small fa fa-th fcwhite hidden"></i></small>&nbsp;
            <span class="hide-menu">AEFI</span>
        </a>
        </li>
        <li class="sidebar-item">
        <a class="sidebar-link" href="training.html" aria-expanded="false">
            <small class="text-muted text-smaller"><i class="fa-small fa fa-th fcwhite hidden"></i></small>&nbsp;
            <span class="hide-menu">Trainings</span>
        </a>
        </li>
        </ul>
        

       
    
   
</ul>
`
