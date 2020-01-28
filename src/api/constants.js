export const botList={
    "@odata.context": "https://platform.uipath.com/anuraplyzyiv/AnuragDefaup29d298910/odata/$metadata#Robots",
    "@odata.count": 2,
    "value": [
        {
            "LicenseKey": null,
            "MachineName": "DESKTOP-05MKJ29",
            "MachineId": 49696,
            "Name": "TestRobot",
            "Username": "desktop-05mkj29\\anura",
            "ExternalName": null,
            "Description": null,
            "Version": "19.12.0.61",
            "Type": "Development",
            "HostingType": "Standard",
            "ProvisionType": "Manual",
            "Password": null,
            "CredentialStoreId": null,
            "UserId": 191965,
            "CredentialType": null,
            "RobotEnvironments": "TestENV",
            "IsExternalLicensed": false,
            "Id": 47870,
            "ExecutionSettings": null
        },
        {
            "LicenseKey": null,
            "MachineName": "DESKTOP-RO2KIQP",
            "MachineId": 50835,
            "Name": "TestOtherRobot",
            "Username": "desktop-ro2kiqp\\cw",
            "ExternalName": null,
            "Description": null,
            "Version": null,
            "Type": "Development",
            "HostingType": "Standard",
            "ProvisionType": "Manual",
            "Password": null,
            "CredentialStoreId": null,
            "UserId": 195803,
            "CredentialType": null,
            "RobotEnvironments": "TestENV",
            "IsExternalLicensed": false,
            "Id": 48957,
            "ExecutionSettings": null
        }
    ]
};

export const releaseList={
    "@odata.context": "https://platform.uipath.com/anuraplyzyiv/AnuragDefaup29d298910/odata/$metadata#Releases",
    "@odata.count": 2,
    "value": [
        {
            "Key": "b6320f21-ee4f-4a8f-a9fe-deea3bf9dd40",
            "ProcessKey": "BOT_SMS_Process",
            "ProcessVersion": "1.0.3",
            "IsLatestVersion": false,
            "IsProcessDeleted": false,
            "Description": "",
            "Name": "BOT_SMS_Process_TestENV",
            "EnvironmentId": 60140,
            "EnvironmentName": "TestENV",
            "InputArguments": null,
            "ProcessType": "Undefined",
            "SupportsMultipleEntryPoints": false,
            "RequiresUserInteraction": true,
            "AutoUpdate": false,
            "JobPriority": "Normal",
            "Id": 63868,
            "Arguments": {
                "Input": null,
                "Output": null
            },
            "ProcessSettings": null
        },
        {
            "Key": "0263a67c-e9a0-45c7-b5c3-350a2e732356",
            "ProcessKey": "TestOrchastrator",
            "ProcessVersion": "1.0.2",
            "IsLatestVersion": false,
            "IsProcessDeleted": false,
            "Description": "",
            "Name": "TestOrchastrator_TestENV",
            "EnvironmentId": 60140,
            "EnvironmentName": "TestENV",
            "InputArguments": null,
            "ProcessType": "Undefined",
            "SupportsMultipleEntryPoints": false,
            "RequiresUserInteraction": true,
            "AutoUpdate": false,
            "JobPriority": "Normal",
            "Id": 64477,
            "Arguments": {
                "Input": null,
                "Output": null
            },
            "ProcessSettings": null
        }
    ]
};

export const botRun={
    "@odata.context": "https://platform.uipath.com/anuraplyzyiv/AnuragDefaup29d298910/odata/$metadata#Jobs",
    "value": [
        {
            "Key": "7c930486-4b80-415a-b4f0-f30bc2580187",
            "StartTime": null,
            "EndTime": null,
            "State": "Pending",
            "JobPriority": "Normal",
            "Source": "Manual",
            "SourceType": "Manual",
            "BatchExecutionKey": "2dff0276-9880-486e-896a-cd7124bfa3b6",
            "Info": null,
            "CreationTime": "2020-01-28T07:18:44.4636005Z",
            "StartingScheduleId": null,
            "ReleaseName": "BOT_SMS_Process_TestENV",
            "Type": "Unattended",
            "InputArguments": null,
            "OutputArguments": null,
            "HostMachineName": null,
            "HasMediaRecorded": false,
            "PersistenceId": null,
            "ResumeVersion": null,
            "StopStrategy": null,
            "RuntimeType": "NonProduction",
            "ReleaseVersionId": null,
            "EntryPointPath": null,
            "Id": 2008906
        }
    ]
}